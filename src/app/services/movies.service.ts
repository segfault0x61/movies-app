import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IMovie,
  IMovieCredits,
  IMovieDto,
  IMovieImages,
  IMovieVideoDto,
} from '../models/movie';
import { filter, map, of, switchMap } from 'rxjs';
import { IGenresDto } from '../models/genre';

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

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<IMovieDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieVideos(id: string) {
    return this.http
      .get<IMovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?language=en&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }

  getMoviesGenres() {
    return this.http
      .get<IGenresDto>(
        `${this.baseUrl}/genre/movie/list?language=en&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          return of(response.genres);
        })
      );
  }

  getMoviesByGenre(genreId: number, page: number) {
    return this.http
      .get<IMovieDto>(
        `${this.baseUrl}/discover/movie/?with_genres=${genreId}&language=en&include_adult=false&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((response) => {
          return of(
            response.results.filter(
              (result) => !result.original_title.toLowerCase().includes('porn')
            )
          );
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<IMovieImages>(
      `${this.baseUrl}/movie/${id}/images?language=en&api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string) {
    return this.http.get<IMovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?language=en&api_key=${this.apiKey}`
    );
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<IMovieDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 18));
        })
      );
  }
}
