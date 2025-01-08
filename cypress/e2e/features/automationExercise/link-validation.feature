
Feature: Validação de todos os links da Home Page

  Como um QA
  Eu preciso garantir
  Que todos os links na Home Page direcionam para as páginas corretas

  Background:
    Given que estou logado no site com o email "testef2021@teste.com.br" e a senha "@teste#123"
    And estou na Home Page

  Scenario: Validação dos links da Home
    When eu percorro a lista de links na Home Page
    And clico em cada link
    Then eu devo ser redirecionado para a página correta sem erros
