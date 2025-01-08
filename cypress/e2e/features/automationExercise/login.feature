Feature: Login no site Automation Exercise

  Como um cliente
  Eu desejo fazer tentativas de login
  para validar a aplicação

  Background:
    Given que estou na página de login do Automation Exercise

  Scenario Outline: Validação de login com diferentes credenciais e métodos de navegação
    When insiro o email "<email>" e a senha "<password>" usando "<método>"
    Then "<resultado>" para o email "<email>"

    Examples:
      | email                   | password    | método          | resultado                        |
      | testef2021@teste.com.br | @teste#123  | formulário       | devo ser autenticado com sucesso |
#      | email@invalido.com      | senhaerrada | formulário       | devo ver uma mensagem de erro    |
#      | testef2021@teste.com.br | @teste#123  | navegação teclado| devo ser autenticado com sucesso |
#      | email@invalido.com      | senhaerrada | navegação teclado| devo ver uma mensagem de erro    |
#

