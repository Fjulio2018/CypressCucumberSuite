@ignore
Feature: Escolher produtos e validar o checkout
  Como um cliente
  Eu desejo encontrar produtos
  Add ao carrinho
  Ir para o checkout


  Background:
    Given que estou logado no site com o email "testef2021@teste.com.br" e a senha "@teste#123"
    And que estou na página de produtos do site

  Scenario Outline: Busca e validação produtos no cart e Checkout

    When pesquiso pelo produto "<produto>" com valor "<valor>"
    And adiciono o produto "<produto>" com valor "<valor>" ao carrinho
    Then valido os dados do produtos "<produto>" com valor "<valor>" na tela de checkout


    Examples:
      | produto                       | valor   | pagamento   |
      | Pure Cotton Neon Green Tshirt | Rs. 850 | Credit Card |

