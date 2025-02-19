#### PROFESSOR: EVERSON SOUSA | TURMA: 3º EM DESENVOLVIMENTO DE SISTEMAS

DATA DE ENTREGA: 19/FEV
# PROJETO 1 – TESTANDO COMPONENTE

Faça um teste unitário de um componente no React. Siga o passo a passo da aula anterior para fazer a instação:

**Preparação do Ambiente:**

- Passo 1: Criar um novo projeto React usando o Vite:
    
    ```bash
    npm create vite@latest
    
    ```
    
- Passo 2: Instalar o Jest como desenvolvedor:
    
    ```powershell
    npm install jest -D
    ```
    
- Passo 3: Criar um script no package.json, na linha “scripts” e alterar o comando “type” para “commonjs”:
    
    ```powershell
    "test": "jest",
    
    (e alterar o "type": "module" para "type": "commonjs")
    ```
    
- Passo 4: Instalar as dependências necessárias para testes com Jest e React Testing Library:
    
    ```powershell
    npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event -D
    ```
    
- Passo 5: Instalar o Babel:
    
    ```powershell
    npm install @babel/core @babel/preset-env @babel/preset-react babel-jest identity-obj-proxy jest-environment-jsdom -D
    ```
    
- Passo 6: Criar um arquivo de configuração `jest.config.js`:
    
    ```jsx
    module.exports = {
    	testEnvironment: 'jest-environment-jsdom',
    	setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    }
    
    ```
    
- Passo 7: Criar na raiz uma pasta `.jest` e um arquivo `setup-tests.js` :
    
    ```jsx
    import '@testing-library/jest-dom';
    
    ```
    

---

**Configuração do Babel:**

- Adicionar o arquivo `babel.config.json`:
    
    ```json
    {
      "presets": [
    	  ["@babel/preset-env", { "targets": { "esmodules": true } }], 
    	  ["@babel/preset-react", { "runtime": "automatic" }]
    	]
    }
    
    ```
    

**React Testing Library: Interagindo com os Componentes:**

- **API da React Testing Library:**
    - **render:** Para renderizar os componentes no ambiente de teste.
    - **screen:** Para acessar os elementos renderizados de maneira mais intuitiva.
    - **fireEvent:** Para disparar eventos como clicks, mudanças de input, etc.

- **Estrutura básica de teste com a React Testing Library:**
    - Como os testes devem ser escritos na "perspectiva do usuário".
    - Exemplo básico:

1. Criar o componente `Button`:
    
    ```jsx
    // Button.jsx
    import React, { useState } from 'react';
    
    function Button({ text }) {
      const [label, setLabel] = useState(text);
    
      const handleClick = () => {
        setLabel('Clicado!');
      };
    
      return <button onClick={handleClick}>{label}</button>;
    }
    
    export default Button;
    
    ```
    
2. Criar o teste utilizando React Testing Library:
    
    ```jsx
    // Button.test.js
    import { render, screen, fireEvent } from '@testing-library/react';
    import '@testing-library/jest-dom';
    import Button from './Button';
    
    test('deve exibir "Clique aqui" e mudar para "Clicado!" quando o botão for clicado', () => {
      render(<Button text="Clique aqui" />);
    
      const buttonElement = screen.getByText(/Clique aqui/i);
      expect(buttonElement).toBeInTheDocument();
    
      fireEvent.click(buttonElement);
    
      const updatedButton = screen.getByText(/Clicado!/i);
      expect(updatedButton).toBeInTheDocument();
    });
    ```

---

### **AGORA VAMOS AO PROJETO!:**

**Objetivo:** Criar um componente de sua escolha. O teste deve verificar o componente e retornar PASS.

**Tarefa:**

1. Criar um componente de sua escolha, com obrigatoriedade de uso do `fireEvent()`.
2. Escrever os testes e retornar PASS.

Boas práticas! :call_me_hand: