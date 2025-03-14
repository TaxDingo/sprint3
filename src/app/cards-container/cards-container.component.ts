import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-cards-container',
  standalone:true,
  imports: [],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})

export class CardsContainerComponent {}

  function cambioClaseGrid(cambioVista: string, newClass: string): void {
    const element = document.getElementById(cambioVista);
    if (!element) {
        console.error(`Element with ID '${cambioVista}' not found.`);
        return;
    }

    // Remover clases previas de Bootstrap grid (ej. col-*, row)
    element.classList.forEach(className => {
        if (className.startsWith('col-') || className === 'row') {
            element.classList.remove(className);
        }
    });

    // Agregar la nueva clase
    element.classList.add(newClass);    
}
