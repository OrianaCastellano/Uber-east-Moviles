import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MultilevelService {

  url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  get_movies() {

    return this.http.get(this.url + 'movies/allmovies');

  }

}
