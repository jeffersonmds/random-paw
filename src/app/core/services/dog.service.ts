import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(public http: HttpClient) { }

  // https://dog.ceo/dog-api/documentation/

  getRandom(): Observable<any> {
    return this.http.get<any>(`https://dog.ceo/api/breeds/image/random`);
  }

  listBreeds(): Observable<any> {
    return this.http.get<any>(`https://dog.ceo/api/breeds/list/all`);
  }

  listByBreed(breed: string): Observable<any> {
    return this.http.get<any>(`https://dog.ceo/api/breed/${breed}/images`);
  }
}
