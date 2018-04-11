import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MservService {
  private keyword: any;
  constructor(private http: Http) {
    console.log('this is working');
    this.keyword="554";
   }
   getpopular( ){
      return this.http.get("https://api.themoviedb.org/3/movie/"+this.keyword +
      "?api_key=0ec1a1c4e9433807af32b92990a0859b")
      .map(res=>res.json());
   }
   updateMovie(keyword:any){
     this.keyword=keyword;
   }

}
