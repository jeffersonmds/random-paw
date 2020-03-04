import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'src/environments/config';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(public http: HttpClient) { }

  getRandom(): Observable<any> {
    const headers = new HttpHeaders({ 'x-api-key': config.MY_CAT_API_KEY });
    return this.http.get<any>(`https://api.thecatapi.com/v1/images/search`, { headers });
  }
}
