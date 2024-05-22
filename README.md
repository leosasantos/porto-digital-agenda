# PortoDigitalAgenda

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Roteiro das aulas

### Criação inicial do projeto (branch master)

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

### Input/output em componentes (branch input-output-components)

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

### Data binding (branch data-binding)

1. Interpolação
  - Observar que já foi usado em card.component.html para os dados
    {{ contato?.nome }}
    {{ contato?.telefone }}
    {{ contato?.email }}

2. Property Binding​
  - Criar a rotina em card.component.ts

    isContatoInternaciona(){
      if(this.contato?.tipo == 1){
        return false;
      } else {
        return true;
      }
    }

  - Criar a div de informação de contato internacional

    <div>
      <!-- https://icons.getbootstrap.com/icons/pin-map-fill/ -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
      </svg>
      Contato internacional
    </div>

  - Adicionar [hidden]="isContatoInternaciona()" na div para controlar sua exibição

3. Event Binding
  - Criar a rotina de onClick no card.component.ts
  
    onClick() {​
      alert('botão clicado!');​
    }
  
  - Criar botão para acionar o evento em card.component.html
    <button class="btn btn-primary" (click)="onClick()">
      <!-- https://icons.getbootstrap.com/icons/trash3-fill/ -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg>
      Excluir
    </button>​

### Directives (branch directives)

1. Criando uma lista de contatos em app.component.ts
  - criando um array de contatos
  - Removendo o contato
  - Ajustando o função para retornar uma lista
  - Ajustando o template para um valor do array (contatos[2])
  

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
