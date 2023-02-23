import { Injectable } from '@angular/core';
import { Cocktail } from '.././models/cocktail';

import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

constructor() { }


public getCocktails(): Cocktail[] {
  return [
  { nom: 'Margarita', prix: 7.50, image: '../assets/images/margarita.jpg' },
  { nom: 'Cosmopolitan', prix: 8.00, image: '../assets/images/cosmopolitan.jpg' },
  { nom: 'Piña Colada', prix: 9.00, image: '../assets/images/pina-colada.jpg' },
  { nom: 'Mojito', prix: 8.50, image: '../assets/images/mojito.jpg' },
  { nom: 'Blue Lagoon', prix: 9.50, image: '../assets/images/blue-lagoon.jpg' },
  { nom: 'Bloody Mary', prix: 8.00, image: '../assets/images/bloody-mary.jpg' },
  ];
}
}
