# Cypress Cucumber Suite

Este projeto contém uma suíte de testes de API utilizando **Cypress** e **Cucumber**.

## Pré-requisitos

### 1. Instalar o Node.js e o npm

#### Para Windows ou macOS:
1. Acesse o site oficial do [Node.js](https://nodejs.org/).
2. Faça o download da versão **LTS** (Long Term Support), que é a versão recomendada.
3. Siga o assistente de instalação para completar o processo.
4. Durante a instalação, o **npm** será instalado automaticamente, pois é incluído no pacote do Node.js.

#### Para Linux:
Se você estiver usando uma distribuição baseada no Ubuntu, pode usar os seguintes comandos no terminal para instalar o **Node.js** e o **npm**:

1. **Atualizar o repositório de pacotes**:
   ```bash
   sudo apt update
Instalar o Node.js e o npm:
bash
Copiar código
sudo apt install nodejs npm
Verificar a versão instalada: Após a instalação, você pode verificar se o Node.js e o npm foram instalados corretamente com os seguintes comandos:

Verificar a versão do Node.js:

bash
   ### Copiar código
node -v
Verificar a versão do npm:

bash
### Copiar código
npm -v

### Instalação
Clone o Repositório (Se ainda não tiver clonado):

bash
### Copiar código
git clone https://github.com/Fjulio2018/CypressCucumberSuite.git
cd CypressCucumberSuite


#### Instale as dependências do projeto:

bash
### Copiar código
npm install

#### Estrutura do Projeto
A estrutura do projeto é a seguinte:


cypress/
├── e2e/
│   └── features/
│       └── automationtrello/
│           └── trelloApi.feature
├── support/
│   └── step_definitions/
│       └── automationtrello/
│           └── trelloApiSteps.js
└── utils/
├── schemas/
│   └── trelloResponseSchema.json
└── schemaValidator.js
#### Executando os Testes
Abra o Cypress:
bash
### Copiar código
npx cypress open
#### Para executar os testes em modo headless:
bash
### Copiar código
npx cypress run


### Report

npm install cucumber-html-reporter --save-dev
npm install @badeball/cypress-cucumber-preprocessor cucumber-html-reporter --save-dev
