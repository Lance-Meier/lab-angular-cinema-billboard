import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [MoviesService]
})
export class MyHomeComponentComponent implements OnInit {
  movieList: Array<object> = [];

  constructor(private movies: MoviesService) { }

  ngOnInit() {
    this.movieList = this.movies.getMovies();
    console.log(this.movieList);
  }

}