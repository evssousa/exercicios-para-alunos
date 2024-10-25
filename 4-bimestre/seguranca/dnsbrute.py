import sys
import dns.resolver

# ler os argumentos do comando
arguments = sys.argv

try:
	domain = arguments[1]
	list = arguments[2]
except:
	print('Faltam argumentos no comando')
	sys.exit(1)

# abre a wordlist
try:
	archive = open(list)
	lines = archive.read().splitlines()
except:
	print('Arquivo não encontrado ou inválido')
	sys.exit(1)
	
# para cada linha da wordlist testa o dns
for line in lines:
	subdomain = line + '.bancocn.com'
	try:
		res = dns.resolver.resolve(subdomain, 'a')
		for result in res:
			print(subdomain, result)
	except:
		pass
