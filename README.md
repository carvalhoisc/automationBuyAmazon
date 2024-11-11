# Testes de Fluxo de Compra - Amazon

Este projeto contém os cenários de teste de um fluxo de compra na Amazon, utilizando BDD com Gherkin e Cypress. O objetivo é verificar os principais processos de compra de um produto, desde a busca até a finalização da compra.

## 📖 História do Usuário

**Como um usuário da Amazon,**  
Eu quero buscar um produto, visualizá-lo, adicioná-lo ao carrinho e finalizar a compra,  
Para adquirir um item de forma rápida e segura, recebendo-o no endereço que eu definir.

## ✅ Critérios de Aceite
1. O usuário deve ser capaz de buscar um produto utilizando a barra de pesquisa.
2. O sistema deve retornar uma lista de produtos relacionados ao termo de busca.
3. O usuário deve conseguir visualizar as informações detalhadas do produto (descrição, preço e opções de compra).
4. O usuário deve poder adicionar o produto ao carrinho com sucesso.


## 🌐 Cenários de Testes em Gherkin

Feature: Busca e compra de produto na Amazon

  Background: 
    Given que o usuário está na página principal

  Scenario: O usuário busca por um produto na Amazon
    When o usuário insere "notebook" na barra de pesquisa
    Then o sistema exibe uma lista de produtos relacionados ao termo pesquisado

  Scenario: O usuário visualiza os detalhes de um produto
    And o usuário insere "notebook" na barra de pesquisa
    When o usuário clica em um produto da lista de resultados
    Then a página de detalhes do produto deve ser exibida, com descrição, preço e opções de compra

  Scenario: O usuário adiciona um produto ao carrinho
    And o usuário insere "notebook" na barra de pesquisa
    And o usuário clica em um produto da lista de resultados
    When o usuário clica em "Adicionar ao carrinho"
    And o usuario clica em Não
    Then o sistema deve exibir uma mensagem de confirmação de adição ao carrinho


⏳ Estimativa de Tempo de Testes
Caso de Teste	Tempo Estimado
CT01 - Busca de produto	10 minutos
CT02 - Visualizar detalhes do produto	10 minutos
CT03 - Adicionar produto ao carrinho	10 minutos
Total estimado: 30 minutos

Cálculo da Estimativa
CT01 - Busca de produto: Teste da busca e verificação dos resultados. Tempo: 10 minutos.
CT02 - Visualizar detalhes do produto: Verificação das informações detalhadas. Tempo: 10 minutos.
CT03 - Adicionar produto ao carrinho: Adição de produto e confirmação. Tempo: 10 minutos.

## 📝 Como rodar os testes

Para rodar os cenários de teste escritos em Gherkin usando Cypress, siga os seguintes passos:

1. Clone este repositório.
2. Instale as dependências necessárias, incluindo o Cypress e o plugin de Gherkin:
   ```bash
   npm install cypress @badeball/cypress-cucumber-preprocessor

Configure o Cypress para suportar arquivos Gherkin (.feature) conforme as instruções do plugin.
Execute o Cypress com o seguinte comando:
bash
npm install
npx cypress open


💬 Contato
Caso tenha dúvidas, entre em contato:

Nome: Igor Santos Carvalho
Email: carvalho.igor.isc@gmail.com
LinkedIn: in/igor-carvalho-bb6184226


Esse `README.md` contém todas as informações relevantes: história do usuário, critérios de aceite, cenários de teste em Gherkin, estimativas de tempo e um guia para executar os testes. Isso serve como uma documentação simples e eficiente para o projeto no Git.
