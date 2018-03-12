import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-movie-compenent',
  templateUrl: './my-movie-compenent.component.html',
  styleUrls: ['./my-movie-compenent.component.css'],
  providers: [MoviesService]
})
export class MyMovieCompenentComponent implements OnInit {
  theMovie = {};

  constructor(private movies: MoviesService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
        .subscribe((params) => this.theMovie = this.movies.getMovie(params['id'])[0]);
     }

}
