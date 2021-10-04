import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Film } from '../module/film-module';
import { FilmService } from '../services/film-service';
import { TestingService } from '../services/testing-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {
  films: Film[] = [];
  isFetching = false;
  
  constructor(private http: HttpClient , 
              private router: Router, 
              private filmService: FilmService,
              ) {}

  ngOnInit() {
    this.loadFilms();
    console.log("loadFilms Called!");
  }

  moreDetails(film: Film) {
    this.filmService.setDetails(film);
    this.router.navigate(['/home/film/film-details']);
  }

  loadFilms() {
    this.isFetching = true;
    this.filmService.loadData()
    .subscribe(
      response => {
        console.log("Response: " + response);
        this.films = response['results'];
        this.isFetching = false;
      }, 
    );
  }
}

