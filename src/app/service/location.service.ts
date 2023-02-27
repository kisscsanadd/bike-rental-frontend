import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private locationsUrl: string;

  constructor(private http: HttpClient) {
    this.locationsUrl = 'localhost:8080/locations';
   }

   public findAll(): Observable<Location[]>{
    return this.http.get<Location[]>(this.locationsUrl);
   }

   public save(location: Location){
    return this.http.post<Location>(this.locationsUrl, location);
   }
}
