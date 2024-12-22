Feature: Login no site Automation Exercise

  Como um cliente
  Eu desejo fazer tentativas de login
  para validar a aplicação

  Background:
    Given que estou na página de login do Automation Exercise

  Scenario Outline: Validação de login com diferentes credenciais
    When insiro o email "<email>" e a senha "<password>"
    Then "<resultado>"

    Examples:
      | email                  | password   | resultado                         |
      | teste2021@teste.com.br | teste      | devo ser autenticado com sucesso  |
      | email@invalido.com     | senhaerrada| devo ver uma mensagem de erro     |
