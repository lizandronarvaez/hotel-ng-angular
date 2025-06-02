import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';
import { ResponseRoom } from '../../features/hotel/interfaces/rooms/responseRooms.interface';
import { RoomTypes } from '../../features/hotel/interfaces/rooms/typesRooms.interface';
import { ResponseRoomsByDateAndType } from '../../features/hotel/interfaces/rooms/responseSearchRoomsByDateAndType.interface';
import { SearchRoom } from '../../features/hotel/interfaces/rooms/searchRooms.interface';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    // crea una habitacion nueva(admin)
    createRoom(): void {
        this.httpClient.post(`${this.backendUrl}/rooms/create-room`, {})
    }

    // actualiza una habitacion(solo admin)
    updateRoom(): void {
        this.httpClient.put(`${this.backendUrl}/rooms/update-room`, {})
    }

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
        return this.httpClient
            .get<ResponseRoomsByDateAndType>(`${this.backendUrl}/rooms/available-rooms-by-date-and-type`,
                { params: { checkInDate, checkOutDate, roomType } })
    }

    getAllAvailableRooms(): void {
        this.httpClient.get(`${this.backendUrl}/rooms/all-available-rooms`)
    }

    getRoom(id: number): void {
        this.httpClient.get(`${this.backendUrl}/rooms/get-room/${id}`)
    }
}
