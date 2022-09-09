import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  constructor(private http:HttpClient) { }

  // TMDB api service
  getData(){
    let url ="https://api.themoviedb.org/3/movie/popular?api_key=d66bbd3aa7afae6c2ce6fa363f33fe57&language=en-US&page=1"
    return this.http.get(url);
  }
}
