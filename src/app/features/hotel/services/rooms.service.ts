import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseRoom } from '../interfaces/rooms/responseRooms.interface';
import { environments } from '../../../../environments/environments';
import { RoomTypes } from '../interfaces/rooms/typesRooms.interface';
import { SearchRoom } from '../interfaces/rooms/searchRooms.interface';
import { ResponseRoomsByDateAndType } from '../interfaces/rooms/responseSearchRoomsByDateAndType.interface';



@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    // Obtener todas las habtaciones
    getAllRooms(page: number, size: number): Observable<ResponseRoom> {
        return this.httpClient.get<ResponseRoom>(`${this.backendUrl}/rooms/get-all-rooms`, {
            params: { page, size }
        });
    }

    // Obtener los tipos de habitaciones
    getTypesRooms(): Observable<RoomTypes> {
        return this.httpClient.get<RoomTypes>(`${this.backendUrl}/rooms/get-types-rooms`);
    }

    // obtener habitacion por fecha y tipo
    getRoomsAvailablesByDateAndType({ checkInDate, checkOutDate, roomType }: SearchRoom): Observable<ResponseRoomsByDateAndType> {
        return this.httpClient.get<ResponseRoomsByDateAndType>(`${this.backendUrl}/rooms/available-rooms-by-date-and-type`,
            {
                params: { checkInDate, checkOutDate, roomType }
            })
    }


}
