import { Component } from '@angular/core';
import { Contato } from './models/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porto-digital-agenda';

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
}
