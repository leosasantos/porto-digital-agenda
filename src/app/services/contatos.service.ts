import { Injectable } from '@angular/core';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  constructor() { }

  private contatos: Contato[] = [
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
}
