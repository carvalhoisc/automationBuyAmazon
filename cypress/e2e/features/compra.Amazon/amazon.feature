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

  
