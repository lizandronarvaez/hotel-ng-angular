import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../interfaces/hotel.interface';
import { environments } from '../../../environments/environments';



@Injectable({
    providedIn: 'root'
})
export class HotelsService {

    private hotels: Hotel[]=[];
    private backendUrl = environments.backendApiUrl;
    constructor(
        private httpClient: HttpClient
    ) { }


    getHotels(startDate: string, endDate: string, cityName: string): Observable<Hotel[]> {
        return this.httpClient.get<Hotel[]>(`${this.backendUrl}`, { params: { startDate, endDate, cityName } });
    }

    addHotels(hotels: Hotel[]): void {
      console.log('Updated hotels array:'+ typeof hotels);
        hotels.forEach(hotel =>{
            console.log(hotel)
            this.hotels.push(hotel)
        });
    }

    getHotelsData(): Hotel[] {
        return this.hotels;
    }
}
