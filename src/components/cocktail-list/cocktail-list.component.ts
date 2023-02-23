import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from 'src/models/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  // public cocktails :Cocktail[] = []; quete 10 //
cocktails: Cocktail[] = [];
  constructor(public cocktailService: CocktailService) {
    // console.log(cocktailService.getCocktails()); ; quete 10 //
  }

  ngOnInit(): void {
    // this.cocktails = this.cocktailService.getCocktails(); ; quete 10 //

    this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
      this.cocktails = cocktailsFromJsonFile;
    });

  }

}
