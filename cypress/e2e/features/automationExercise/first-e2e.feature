Feature: Escolher produtos e selecionar forma de pagamento
  Como um cliente
  Eu desejo escolher produtos e selecionar uma forma de pagamento
  Para completar uma compra com sucesso

  Background:
    Given que estou logado no site com o email "testef2021@teste.com.br" e a senha "@teste#123"
    And que estou na página de produtos do site

  Scenario Outline: Busca e compra de produtos com seleção de pagamento

    When pesquiso pelo produto "<produto>" com valor "<valor>"
    And adiciono o produto "<produto>" com valor "<valor>" ao carrinho
    And valido os dados do procuto na tela de checkout


    Examples:
      | produto                       | valor   | pagamento   |
      | Pure Cotton Neon Green Tshirt | Rs. 850 | Credit Card |

