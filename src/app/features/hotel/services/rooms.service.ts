import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseRoom } from '../interfaces/responseRooms.interface';
import { environments } from '../../../../environments/environments';



@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    getAllRooms(): Observable<ResponseRoom> {
        return this.httpClient.get<ResponseRoom>(`${this.backendUrl}/rooms/get-all-rooms`);
    }
}
