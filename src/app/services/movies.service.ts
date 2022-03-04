import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie, IMovieDto } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '9ce20a124dcb5b5ab9a8a56a3360b147';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http
      .get<IMovieDto>(
        `${this.baseUrl}/movie/${type}?language=en&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          return of(response.results.slice(0, count));
        })
      );
  }

  getMovie(id: string) {
    return this.http.get<IMovie>(
      `${this.baseUrl}/movie/${id}?language=en&api_key=${this.apiKey}`
    );
  }

  searchMovies(page: number) {
    return this.http
      .get<IMovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&language=en&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }
}
