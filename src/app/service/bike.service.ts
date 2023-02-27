import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from '../model/bike';

@Injectable()
export class BikeService {

  private bikesUrl: string;

  constructor(private http: HttpClient) {
    this.bikesUrl = 'http://localhost:8080/bikes';
   }

   public findAll(): Observable<Bike[]>{
    return this.http.get<Bike[]>(this.bikesUrl);
   }

   public save(bike: Bike){
    return this.http.post<Bike>(this.bikesUrl, bike);
   }
}
