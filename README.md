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
