# Cypress do Zero com BDD – Qazando

[![Build Status](https://github.com/Devrodd/cypress-e2e-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Devrodd/cypress-e2e-portfolio/actions)
[![Cypress Version](https://img.shields.io/badge/Cypress-v12.0.0-blue)](https://www.cypress.io)
[![BDD (Cucumber)](https://img.shields.io/badge/BDD-Cucumber-green)](https://github.com/badeball/cypress-cucumber-preprocessor)

> **Portfólio de automação E2E** baseado no curso **“Cypress do Zero com BDD”** da Qazando.
> Testes de comportamento aplicados à aplicação de exemplo **automationpratice.com.br**.

---

## 📋 Sumário

* [Visão Geral](#-visão-geral)
* [Tecnologias](#-tecnologias)
* [Pré-requisitos](#-pré-requisitos)
* [Instalação](#-instalação)
* [Como Executar](#-como-executar)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [BDD & Features](#-bdd--features)
* [CI/CD](#-cicd)
* [Contribuições](#-contribuições)
* [Licença](#-licença)

---

## 🔍 Visão Geral

Este repositório contém testes end-to-end escritos em **Gherkin** e executados com **Cypress + Cucumber Preprocessor**, aplicados à aplicação de exemplo em:

> **[https://automationpratice.com.br/](https://automationpratice.com.br/)**

Cobre cenários de login, cadastro, navegação responsiva e fluxo de checkout.

---

## 🛠 Tecnologias

* 🔹 [Cypress](https://www.cypress.io/) (v12)
* 🔹 [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
* 🔹 [Node.js](https://nodejs.org/) (>= v16)
* 🔹 [Mochawesome](https://github.com/adamgruber/mochawesome)
* 🔹 [GitHub Actions](https://github.com/features/actions)

---

## ⚙️ Pré-requisitos

* **Node.js** (versão 16 ou superior)
* Gerenciador de pacotes: **npm** ou **yarn**
* (Opcional) Conta no **Cypress Dashboard**

---

## 🚀 Instalação

```bash
git clone https://github.com/Devrodd/cypress-e2e-portfolio.git
cd cypress-e2e-portfolio
npm ci
# ou yarn install
```

---

## ▶️ Como Executar

* **Interativo (UI)**

  ```bash
  npm run cy:open
  ```
* **Headless (CLI)**

  ```bash
  npm run cy:run
  ```

Após a execução, abra o relatório em `cypress/reports/mochawesome.html`.

---

## 📂 Estrutura do Projeto

```
cypress-e2e-portfolio/
├── cypress.config.js       # baseUrl: https://automationpratice.com.br
├── features/               # Cenários Gherkin (.feature)
├── cypress/
│   ├── e2e/                # Step Definitions e specs BDD
│   ├── fixtures/           # Dados de teste
│   ├── support/            # Commands customizados e setup
│   └── reports/            # Relatórios Mochawesome
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline CI via GitHub Actions
└── README.md
```

---

## 🧪 BDD & Features

Exemplo em `features/login.feature`:

```gherkin
Feature: Autenticação de usuário

  Scenario: Login válido
    Given que o usuário acessa a página de login
    When preenche usuário e senha válidos
    And clica em “Entrar”
    Then o dashboard deve ser exibido
```

Os step definitions estão em `cypress/e2e/login.steps.js`.

---

## ⚙️ CI/CD

```yaml
name: CI

on: [push, pull_request]
jobs:
  bdd-e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '16' }
      - run: npm ci
      - run: npm run cy:run -- --reporter mochawesome
      - uses: actions/upload-artifact@v3
        with:
          name: mochawesome-report
          path: cypress/reports
```

---

## 🤝 Contribuições

1. Abra uma issue.
2. Crie uma branch `feature/nome-da-feature`.
3. Envie um pull request.

---

## 📄 Licença

MIT License – detalhes em `LICENSE.md`.

---

> Este portfólio faz parte do curso **“Cypress do Zero com BDD”** da Qazando. 🚀
