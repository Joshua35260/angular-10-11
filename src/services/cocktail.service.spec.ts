/* tslint:disable:no-unused-variable */
// test avec la version locale de cocktail pour la quête 10 //

import { TestBed, waitForAsync } from '@angular/core/testing';
import { CocktailService } from './cocktail.service';
import { CocktailListComponent } from 'src/components/cocktail-list/cocktail-list.component';

describe('Cocktail Service and Component Tests', () => {
  beforeEach(waitForAsync(() => {
  TestBed.configureTestingModule({
  declarations: [
  CocktailListComponent
  ],
  providers: [
  CocktailService
  ]
  }).compileComponents();
  }));
  
  it('should create CocktailService', () => {
  const service: CocktailService = TestBed.inject(CocktailService);
  expect(service).toBeTruthy();
  });
  
  it('should have getCocktails() method that returns at least one cocktail', () => {
  const service: CocktailService = TestBed.inject(CocktailService);
  const cocktails = service.getCocktails();
  expect(cocktails.length).toBeGreaterThan(0);
  });
  
  it('should create CocktailListComponent', () => {
  const fixture = TestBed.createComponent(CocktailListComponent);
  const component = fixture.componentInstance;
  expect(component).toBeTruthy();
  });
  
  it('should have public property cocktails', () => {
  const fixture = TestBed.createComponent(CocktailListComponent);
  const component = fixture.componentInstance;
  expect(component.cocktails).toBeDefined();
  });
  
  it('should display at least one cocktail', () => {
  const fixture = TestBed.createComponent(CocktailListComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement;
  const content = compiled.textContent;
  const firstCocktail = fixture.componentInstance.cocktails[0];
  expect(content).toContain(firstCocktail.nom);
  });
  });