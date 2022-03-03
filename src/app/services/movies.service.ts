import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '9ce20a124dcb5b5ab9a8a56a3360b147';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming') {
    return this.http.get(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
