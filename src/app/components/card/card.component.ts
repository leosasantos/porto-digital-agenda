import { Component, Input } from '@angular/core';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() contato: Contato|null = null;
}
