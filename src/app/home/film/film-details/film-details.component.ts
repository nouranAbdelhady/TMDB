import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film-service';
import { Film } from 'src/app/module/film-module';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})

export class FilmDetailsComponent implements OnInit {
  certainFilm!: Film;

  constructor(public filmService: FilmService , public router: Router) { }

  ngOnInit(): void {
    this.certainFilm = this.filmService.getDetails();
    console.log("GetDetails called");
  }
  
  goBack() {
    this.router.navigate(['/home']);
  }
  
  logOut(){
    this.router.navigate(['']);
  }

}