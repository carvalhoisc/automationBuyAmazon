import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { AmazonHomePage, SearchResultsPage, ProductDetailsPage } from "@pages/pageObject";

// -- Busca de Produto --
Given('que o usuário está na página principal', () => {
  const homePage = new AmazonHomePage();
  homePage.visit();
});

When('o usuário insere {string} na barra de pesquisa', (produto) => {
  const homePage = new AmazonHomePage();
  homePage.searchProduct(produto);
});

Then('o sistema exibe uma lista de produtos relacionados ao termo pesquisado', () => {
  const resultsPage = new SearchResultsPage();
  resultsPage.verifyResults();
});

// -- Visualizar detalhes de produto --

When('o usuário clica em um produto da lista de resultados', () => {
  const resultsPage = new SearchResultsPage();
  resultsPage.clickFirstProduct(); // Verifique este método
});

Then('a página de detalhes do produto deve ser exibida, com descrição, preço e opções de compra', () => {
  const detailsPage = new ProductDetailsPage();
  detailsPage.verifyProductDetails();
});

// -- Adicionar produto ao carrinho --
Given('que o usuário está na página de detalhes do produto', () => {
  const homePage = new AmazonHomePage();
  homePage.visit();
  const resultsPage = new SearchResultsPage();
  homePage.searchProduct('notebook'); // Pode ser ajustado para o produto que você deseja
  resultsPage.clickFirstProduct();
});

When('o usuário clica em {string}', (botao) => {
  const detailsPage = new ProductDetailsPage();
  detailsPage.clickButton(botao); // Defina a função clickButton para lidar com diferentes botões
});

When('o usuario clica em Não', (botao) => {
  const detailsPage = new ProductDetailsPage();
  detailsPage.clickNoButton(botao); // Defina a função clickButton para lidar com diferentes botões
});

Then('o sistema deve exibir uma mensagem de confirmação de adição ao carrinho', () => {
  const detailsPage = new ProductDetailsPage();
  detailsPage.verifyCartAdditionMessage();
});

