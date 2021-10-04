import { fakeAsync, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { FilmService } from "../services/film-service";
import { HomeComponent } from "./home.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TestingService } from "../services/testing-service";

describe('Component: Home', () => {
    let fixture;
    let filmService;
    let app: HomeComponent;
    
    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
        
        }).compileComponents();
    })

    beforeEach( () =>{
        fixture = TestBed.createComponent(HomeComponent);
        filmService = TestBed.inject(FilmService);  
        spyOn(filmService,'loadData').and.returnValue(of({'results': [TestingService.getDummyFilm()]}));
        app = fixture.componentInstance;
        fixture.detectChanges(); 
    })

    it('should create home app',() =>{
        expect(app).toBeTruthy();
    })

    it('should load sah',fakeAsync(() => {
        expect(app.films).toEqual([TestingService.getDummyFilm()]);
    }))

});




  