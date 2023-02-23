import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from 'src/models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  // public cocktails :Cocktail[] = [];
cocktails: Cocktail[] = [];
  constructor(public cocktailService: CocktailService) {
    // console.log(cocktailService.getCocktails());
  }

  ngOnInit(): void {
    // this.cocktails = this.cocktailService.getCocktails();

    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });

  }

}
