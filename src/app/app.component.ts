import { Component } from '@angular/core';
import { Contato } from './models/contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'porto-digital-agenda';

  contato: Contato = {
    nome: "Fulano de Tal",
    telefone: "81123456789",
    email: "fulano@empresa.com.br",
    tipo: 1
  }

  getContato(): Contato {
    return this.contato;
  }
}
