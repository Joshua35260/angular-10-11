import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
interface NasaApiResponse {
  url: string;
  // Ajoutez les autres propriétés de la réponse JSON ici
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {

constructor(public http: HttpClient) { }

getImageOfTheDay(): Observable<string> {
  return this.http.get<NasaApiResponse>("https://api.nasa.gov/planetary/apod?api_key=6i7CpzeuIaU1fjlpN2tXv1IcdZSUbfC68IuLMaI4")
    .pipe(
      map(response => response.url)
    );
}
}
