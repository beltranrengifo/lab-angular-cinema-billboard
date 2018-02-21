import { Injectable, OnInit } from '@angular/core';
import movies from '../../sample-movies';


@Injectable()
export class CinemaMovies {
    Movies:Array<any>=movies;    
    constructor() {}
    getMovies(){
        return this.Movies;
    }
    getMovie(id){
        return this.Movies.filter(m=> m.id == id)[0]
    }
}