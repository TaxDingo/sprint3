import { Component } from '@angular/core';
import { Product } from '../../models/Product.model';
import { Input } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone:true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() cartas: Product | undefined;
  
}

