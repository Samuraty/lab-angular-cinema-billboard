import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movie;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.movie = this.moviesService.getMovie(Number(params.id)))
  }

  ngOnInit() {
  }
}
