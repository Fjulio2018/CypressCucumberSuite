Feature: : API do Trello

Scenario: : Validar o campo nome da estrutura da lista
Given que eu envie uma requisição GET para "https://api.trello.com/1/actions/592f11060f95a3d3d46a987a"
Then o código de status deve ser 200
And o nome deve estar presente
