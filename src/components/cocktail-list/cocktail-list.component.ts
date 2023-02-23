import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from 'src/models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails :Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {
    // console.log(cocktailService.getCocktails());
  }

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }

}
