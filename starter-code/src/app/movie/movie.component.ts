import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaMovies } from '../services/cinemamovies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  id: number;
  actualMovie: any;
  constructor(public router: ActivatedRoute, 
              private movies: CinemaMovies) 
              {
                this.router.params.subscribe(p => this.id = p.id);
                this.actualMovie = this.movies.getMovie(this.id)
              }
  ngOnInit() {}

}
