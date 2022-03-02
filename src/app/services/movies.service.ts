import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=9ce20a124dcb5b5ab9a8a56a3360b147&language=en-US&page=1`
    );
  }
}
