# Cypress Testes Automatizados

Este repositório contém testes automatizados para o site da Amazon utilizando o [Cypress](https://www.cypress.io/), uma das ferramentas de teste end-to-end mais populares.

## Pré-requisitos

Antes de rodar os testes, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) (geralmente já vem com o Node.js)
- Cypress  v13.6.4

## Configuração do Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git

2. **Instale as Dependências**

   Navegue até o diretório do projeto clonado e instale as dependências do Node.js necessárias para o Cypress:
  
   ```
   cd nome-do-diretorio
   ```
   ```
   npm install
   ```

3. **Executando os Testes**

Você pode rodar os testes em modo interativo ou em modo headless (sem interface gráfica).

**Modo Interativo**  
   Este modo abre o Cypress Test Runner, onde você pode ver os testes acontecendo em tempo real.
      ```
      npx cypress open
      ```

   Aguarde o Cypress iniciar e, quando a janela abrir, clique no teste que você deseja executar.

**Modo Headless**  
   Este modo executa os testes no terminal. É ideal para integrações contínuas e automatizadas.
      ```
      npx cypress run
      ```

4. **Estrutura do Projeto**

O projeto é organizado da seguinte forma:

   - cypress/e2e/: Contém os arquivos de teste especificados.  
   - cypress/fixtures/: Usado para armazenar dados de testes (caso aplicável).  
   - cypress/plugins/: Plugins do Cypress.  
   - cypress/support/: Comportamentos globais e configurações.  

**Contribuições**  
   Sinta-se à vontade para contribuir com o projeto!

**Faça um fork do repositório**    
   Crie sua branch de recurso (git checkout -b feature/nomeDaFeature)  
   Commit suas alterações (git commit -m 'Adicionando um novo recurso')  
   Envie para o repositório (git push origin feature/nomeDaFeature)  
   Abra um Pull Request  

**Mais Informações**  
   Para mais detalhes sobre o Cypress, visite a [documentação oficial](https://docs.cypress.io/)
