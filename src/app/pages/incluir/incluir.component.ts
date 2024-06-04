import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContatosService } from '../../services/contatos.service';

import { Contato } from '../../models/contato';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrl: './incluir.component.css'
})
export class IncluirComponent {

  constructor(
    private contatosService: ContatosService
  ){ }

  form = new FormGroup({
    nome: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
    tipo: new FormControl(),
    
  });

  onSubmit(){
    let c  = {nome:this.form.value.nome,
              telefone: this.form.value.telefone,
              email: this.form.value.email,
              tipo: +this.form.value.tipo,
    }
    this.contatosService.inserirContato(c);
    console.log(this.contatosService.recuperarContatos())
  }

}

  
