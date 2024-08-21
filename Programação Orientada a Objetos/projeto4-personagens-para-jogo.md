#### PROFESSOR: EVERSON SOUSA | TURMA: 2º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: até 29/AGO, às 23:59.
# PROJETO 4 – PERSONAGENS PARA JOGO

## Ex: Crie as seguintes classes utilizando JS:

- Uma classe Character que representa um personagem de um jogo.
  - Ela deverá possuir as propriedades name, lifepoints, attackPts e defensePts.
  - Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character) e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
- Uma classe Thief que representa um personagem de um tipo diferente.
  - Ela deve herdar as propriedades de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
- Uma classe Mage que representa outro tipo de personagem e também herda de Character.
  - No entanto, essa classe também deve ter uma propriedade magicPts.
  - Além disso, ela também deve sobrescrever o método de ataque para que o cálculo utilize os pontos de ataque somados aos pontos de magia.
  - A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem alvo (passado como argumentos do método) em um valor de duas vezes os pontso de magia do personagem atual.
- Uma classe Warrior que representa outro tipo de personagem e também herda de Character.
  - Essa classe também deve possuir uma propriedade shieldPts e outro para position, que poderá ser de ataque ou defesa.
  - Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.
  - Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa (stance). Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque, apenas os pontos de defesa devem ser considerados (comportamento normal).

```
O console fica por sua conta!
```

Lembrando que todas os testes e instâncias ficam em um arquivo de nome index.js.

Boas práticas! :call_me_hand:
