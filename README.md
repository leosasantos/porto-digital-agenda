# PortoDigitalAgenda

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Roteiro das aulas

### Criação inicial do projeto

1. Criar projeto do github

  - Configurar chaves ssh
  - Criar repositório inicial

2. Criar projeto com angular cli

  - ng new porto-digital-agenda --no-standalone --routing --ssr=false

3. Realizando commit inicial

  - git add .
  - git commit -m "Initial commit"
  - git remote add origin <remote_repository_url>
  - git push -u origin master

### Configurando bootstrap

1. Instalar biblioteca

  - npm install bootstrap

2. Configurar css no angular.json

  - Procurar no angular.json a propriedade "projects > <name_projeto> > architect > build > options > styles"
  - Adicionar "node_modules/bootstrap/dist/css/bootstrap.css"

### Criando componentes card

1. Criando card

  - ng g c components/card
  - Copiar código do card do bootstrap (https://getbootstrap.com/docs/4.0/components/card/) para card.component.html
  - Ajustar código para contatos
  - Ajustar app.component.html

### Input/output em componentes

1. Criar interface contato com nome, telefone, email e tipo
  - ng g i models/contato
  - Adicionar os tipos na inteface

    nome: string;
    telefone: string;
    email: string;
    tipo: number; // nacional -> 1 e internacional -> 2

2. Configurando o card para Input
  - Adicionando "@Input() contato: Contato|null = null;" em card.component.ts
  - Usando o contato no template (card.component.html)

    <h5 class="card-title">{{ contato?.nome }}</h5>
    <p class="card-text">Telefone: {{ contato?.telefone }}</p>
    <p class="card-text">Email: {{ contato?.email }}</p>

3. Usando o novo card com Input
  - Definindo um contato em app.component.ts

    contato: Contato = {
      nome: "Fulano de Tal",
      telefone: "81123456789",
      email: "fulano@empresa.com.br",
      tipo: 1
    }

    getContato(): Contato {
      return this.contato;
    }

  - Usando no contato no card em app.component.html
    <app-card [contato]="contato"></app-card>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
