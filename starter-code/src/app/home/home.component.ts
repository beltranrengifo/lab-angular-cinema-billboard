import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaMovies } from '../services/cinemamovies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(public router: Router, private movies: CinemaMovies ) { }
  ngOnInit() {}
  moviesList:Array<any> = this.movies.getMovies();
}
