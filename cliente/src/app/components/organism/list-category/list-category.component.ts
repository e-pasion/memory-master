import { Component } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent {
  deleteActive: boolean = false;
  categories: string[] = [
    'Verbos',
    'Gatos',
    'Perros',
    'Coches',
    'Películas',
    'Libros',
    'Recetas',
    'Deportes',
    'Tecnología',
    'Música',
    'Arte',
    'Viajes',
    'Historia',
    'Ciencia',
    'Moda',
    'Juegos',
    'Alimentos',
    'Bebidas',
    'Salud',
    'Educación',
    'Finanzas',
    'Política',
    'Animales',
    'Naturaleza',
    'Fotografía',
    'Aventura',
    'Negocios',
    'Marketing',
    'Entretenimiento',
    'Cine',
  ];

  handleDelete(): void {
    this.deleteActive = !this.deleteActive;
  }
}
