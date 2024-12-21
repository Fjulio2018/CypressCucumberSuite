@ignore
Feature: Login no site Automation Practice

  @ignore
  Scenario: Login com credenciais válidas
    Given que estou na página de login do Automation Practice
    When insiro o email "teste2021@teste.com.br" e a senha "teste"
    Then devo ser autenticado com sucesso

  @ignore
  Scenario: Login com credenciais inválidas
    Given que estou na página de login do Automation Practice
    When insiro o email "email@invalido.com" e a senha "senhaerrada"
    Then devo ver uma mensagem de erro
