import { Injectable } from "@angular/core";
import {sampleMovies} from "../../sample-movies"

interface movies {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours?: Array<string>;
  room?: number;
}

@Injectable()
export class MoviesService {
  movies: Array<movies> = sampleMovies;
  getMovies(){
    return this.movies;
  }
  getMovie(id) {
    return this.movies[id-1]
  }
}
