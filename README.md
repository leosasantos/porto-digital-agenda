# PortoDigitalAgenda

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6..

## Link do projeto para download
https://serprogovbr-my.sharepoint.com/:u:/g/personal/leonardo_leal_serpro_gov_br/EelWNJ2VovJIubJAFGpj0qYBi4nnjTgkdbUlGi3RXMO-aw?e=hE18bc

## Roteiro das aulas

### Criação inicial do projeto (branch master)

1. Criar projeto do github

  - Configurar chaves ssh
  - Criar repositório inicial

2. Criar projeto com angular cli

  - ```ng new porto-digital-agenda --no-standalone --routing --ssr=false```

3. Realizando commit inicial

  ```
  git add .
  git commit -m "Initial commit"
  git remote add origin <remote_repository_url>
  git push -u origin master
  ```

### Configurando bootstrap

1. Instalar biblioteca

  - ```npm install bootstrap```

2. Configurar css no angular.json

  - Procurar no angular.json a propriedade "projects > <name_projeto> > architect > build > options > styles"
  - Adicionar "node_modules/bootstrap/dist/css/bootstrap.css"

### Criando componentes card

1. Criando card

  - ```ng g c components/card```
  - Copiar código do card do bootstrap (https://getbootstrap.com/docs/4.0/components/card/) para card.component.html
  - Ajustar código para contatos
  - Ajustar app.component.html

### Input/output em componentes (branch input-output-components)

1. Criar interface contato com nome, telefone, email e tipo
  - ```ng g i models/contato```
  - Adicionar os tipos na inteface

```
    nome: string;
    telefone: string;
    email: string;
    tipo: number; // nacional -> 1 e internacional -> 2
```

2. Configurando o card para Input
  - Adicionando ```@Input() contato: Contato|null = null;``` em card.component.ts
  - Usando o contato no template (card.component.html)

```
    <h5 class="card-title">{{ contato?.nome }}</h5>
    <p class="card-text">Telefone: {{ contato?.telefone }}</p>
    <p class="card-text">Email: {{ contato?.email }}</p>
```

3. Usando o novo card com Input
  - Definindo um contato em app.component.ts
```
    contato: Contato = {
      nome: "Fulano de Tal",
      telefone: "81123456789",
      email: "fulano@empresa.com.br",
      tipo: 1
    }

    getContato(): Contato {
      return this.contato;
    }
```

  - Usando no contato no card em app.component.html
    ```<app-card [contato]="contato"></app-card>```

### Data binding (branch data-binding)

1. Interpolação
  - Observar que já foi usado em card.component.html para os dados
```
    {{ contato?.nome }}
    {{ contato?.telefone }}
    {{ contato?.email }}
```
2. Property Binding​
  - Criar a rotina em card.component.ts
```
    isContatoInternaciona(){
      if(this.contato?.tipo == 1){
        return false;
      } else {
        return true;
      }
    }
```
  - Criar a div de informação de contato internacional
```
    <div>
      <!-- https://icons.getbootstrap.com/icons/pin-map-fill/ -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-map-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"/>
        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
      </svg>
      Contato internacional
    </div>
```
  - Adicionar ```[hidden]="isContatoInternaciona()"``` na div para controlar sua exibição

3. Event Binding
  - Criar a rotina de onClick no card.component.ts
  ```
    onClick() {​
      alert('botão clicado!');​
    }
  ```
  - Criar botão para acionar o evento em card.component.html
```
    <button class="btn btn-primary" (click)="onClick()">
      <!-- https://icons.getbootstrap.com/icons/trash3-fill/ -->
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg>
      Excluir
    </button>​
```
### Directives (branch directives)

1. Criando uma lista de contatos em app.component.ts
  - criando um array de contatos
  - Removendo o contato
  - Ajustando o função para retornar uma lista
  - Ajustando o template para um valor do array (```contatos[2]```)

```
  contatos: Contato[] = [
    {
      nome: "Fulano de Tal",
      telefone: "81123456789",
      email: "fulano@empresa.com.br",
      tipo: 2
    },
    {
      nome: "Beltrano de Tal",
      telefone: "81234567981",
      email: "beltrano@empresa.com.br",
      tipo: 2
    },
    {
      nome: "Ciclano de Tal",
      telefone: "81345678912",
      email: "ciclano@empresa.com.br",
      tipo: 1
    }
  ];

  getContatos(): Contato[] {
    return this.contatos;
  }
```

2. Criando uma container para listar
  - Adicionando uma div container no component.html
```
    <div class="container" style="display: flex"></div>
```
  - Exibindo mais de um card em app.component.html
```
    <app-card [contato]="contatos[0]"></app-card>
    <app-card [contato]="contatos[1]"></app-card>
    <app-card [contato]="contatos[2]"></app-card>
```
  - Ajustando style do card para listar em card.component.html
```
    <div class="card" style="width: 20rem; height: 13rem; margin: 1rem">
```

3. Listar componentes com @for

  - Atualizar o app.component.ts com o @for

```
@for (contato of contatos; track $index) {
  <app-card [contato]="contato"></app-card>
}
```

4. Exibir informação de contato internacional com @if

  - Atualizar o componente card (card.component.html) com @if

```
    @if (!isContatoInternaciona()) {
      <!-- https://icons.getbootstrap.com/icons/pin-map-fill/ -->
      <div>
      ...
      </div>
    }
```

### Services (branch service)

1. Criar um serviço para recuperar contatos

  - ``` ng g s services/contatos ```
  - Transferindo o array de contatos de app.componnent.ts para o service e implementando o serviço de recuperar contatos

```
contato.service.ts
  contatos: Contato[] = [
    {
      nome: "Fulano de Tal",
      telefone: "81123456789",
      email: "fulano@empresa.com.br",
      tipo: 2
    },
    {
      nome: "Beltrano de Tal",
      telefone: "81234567981",
      email: "beltrano@empresa.com.br",
      tipo: 2
    },
    {
      nome: "Ciclano de Tal",
      telefone: "81345678912",
      email: "ciclano@empresa.com.br",
      tipo: 1
    }
  ];

  public recuperarContatos(): Contato[] {
    return this.contatos;
  }
```
  
  - Removendo o array e adicionando o serviço no construtor e sua chamada em app.componnent.ts
```
  constructor(
    private contatosService: ContatosService
  ){ }

  getContatos(): Contato[] {
    return this.contatosService.recuperarContatos();
  }
```

2. Ajustando o app.component.html para chamar a nova rotina
```
@for (contato of getContatos(); track $index) {
```

### Rotas (branch router)

1. Criar o componente listar
  - Criar o componente listar contatos
```
ng g c pages/listar 
```
  
  - Copiar o conteudo do listar de app.component.ts para .componennt.ts

```
export class ListarComponent {

  constructor(
    private contatosService: ContatosService
  ){ }

  getContatos(): Contato[] {
    return this.contatosService.recuperarContatos();
  }

}
```

 - Copiar o conteudo do container de app.component.html para listar.componennt.html

 ```
<div style="display: flex">
  @for (contato of getContatos(); track $index) {
    <app-card [contato]="contato"></app-card>
  }
</div>
 ```

2. Criar o componente incluir

```
ng g c pages/incluir
```

3. Adicionando menu em app.component.ts

```
  <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Agenda Telefônica</span>
    </a>

    <ul class="nav nav-pills">
      <li class="nav-item"><a href="#" class="nav-link">Listar</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Incluir</a></li>
    </ul>
  </header>
```

4. Criando rotas 
  - Criar rotas em app-routing.module.ts
```
const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'incluir', component: IncluirComponent },
  { path: '', redirectTo: '/listar', pathMatch: 'full'}
];
```  

  - Adicionar renderização em app.component.html
```
<div class="container">
  <router-outlet></router-outlet>
</div>
```

  - Adicionar os links em app.component.html
```
    <li class="nav-item"><a routerLink="/listar" class="nav-link">Listar</a></li>
    <li class="nav-item"><a routerLink="/incluir" class="nav-link">Incluir</a></li>
```
### Formulários (Reactive Forms)
1. Criando Formulário Reativo (Reactive Form) 
  - Ir em app.module.ts e incluir ReactiveFormsModule nos imports.
```
import {ReactiveFormsModule} from '@angular/forms';
...
@NgModule({
...
  imports: [
...
    // outros imports ...
    ReactiveFormsModule,
  ],
...
})
export class AppModule {}
```
  - Ir em incluir.component.ts e incluir FormGroup e FormControl nos imports.
```
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrl: './incluir.component.css'
})
export class IncluirComponent {

  form = new FormGroup({
    nome: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
    tipo: new FormControl(),
  });

}
```
  - Ir em incluir.component.html e incluir o texto abaixo, o nosso componente de inclusão ficará visível, apesar de pouco elegante.
```

<form [formGroup]="form">    
  <label>Nome:</label>
  <input type="text" formControlName="nome">

  <label>Telefone:</label>
  <input type="number" formControlName="telefone">

  <label>Email:</label>
  <input type="text" formControlName="email">

  <label>Tipo:</label>
  <select formControlName="tipo">
    <option value="1">Nacional</option>
    <option value="2">Internacional</option>
  </select>

  <button type="submit">Incluir</button>
  <button>Limpar</button>
  
</form>
```
  - Ir em incluir.component.html e adicionar classes de estilo do Bootstrap, o nosso formulário ficará com um estilo bem melhor.
```
<div style="display: flex">
    <form [formGroup]="form">
        <div class="form-row">
            <div class="col-12">
                <label>Nome:</label>
                <input type="text" class="form-control" formControlName="nome">
            </div>
        </div>
        <div class="form-row">
            <div class="col-12">
                <label>Telefone:</label>
                <input type="number" class="form-control" formControlName="telefone">
            </div>
        </div>
        <div class="form-row">
            <div class="col-12">
                <label>Email:</label>
                <input type="text" class="form-control" formControlName="email">
            </div>
        </div>
        <div class="form-row">
            <div class="col-12">
                <label>Tipo:</label>
                <select formControlName="tipo" class="form-control form-select">
                    <option value="1">Nacional</option>
                    <option value="2">Internacional</option>
                </select>
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Incluir</button>
        <button class="btn btn-secondary">Limpar</button>

    </form>
</div>
```
    
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
