import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailListComponent } from '../components/cocktail-list/cocktail-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasaImgComponent } from 'src/components/nasa-img/nasa-img.component';

@NgModule({
  declarations: [
    AppComponent,
    CocktailListComponent,
    NasaImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
