import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cards-container',
  standalone:true,
  imports: [],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent {
  vista: 'grid' | 'lista' = 'grid'; // Estado inicial

  @Output() vistaCambiada = new EventEmitter<'grid' | 'lista'>(); // Evento para notificar cambios

  cambiarVista() {
    this.vista = this.vista === 'grid' ? 'lista' : 'grid';
    this.vistaCambiada.emit(this.vista); // Emite el nuevo estado al hijo
  }
}