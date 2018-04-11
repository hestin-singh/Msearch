import { Component, OnInit } from '@angular/core';
import { MservService } from '../mserv.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:any[] ;
  keyword:string;
   constructor( private mservService:MservService) { 
    
  }

  findMovie(){
    this.mservService.updateMovie(this.keyword);
 
  this.mservService.getpopular().subscribe(movie=>{
    console.log(movie);
    this.movie= movie;
  });
} 

  ngOnInit() {
  }

}
