import { Component } from '@angular/core';
import { ContatosService } from '../../services/contatos.service';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {

  constructor(
    private contatosService: ContatosService
  ){ }

  getContatos(): Contato[] {
    return this.contatosService.recuperarContatos();
  }

}
