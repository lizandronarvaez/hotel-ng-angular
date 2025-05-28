import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { ResponseBooking } from '../../features/hotel/interfaces/responseBooking.interface';

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    // Obtener todas las habtaciones(solo admin)
    getAllBookings(): Observable<ResponseBooking> {
        return this.httpClient.get<ResponseBooking>(`${this.backendUrl}/bookings/all`);
    }

    // Obtiene las reservas de un usuario(solo admin)
    getUserBookings(idUser: string): void {
        this.httpClient.get(`${this.backendUrl}/users/get-user-bookings/${idUser}`)
    }

    // eliminar reserva
    deleteBooking(booking_id: number): void {
        this.httpClient.delete(`${this.backendUrl}/bookings/cancel-booking/${booking_id}`,);
    }

    // Obtiene un usuario
    getUser(id: string): void {
        this.httpClient.get(`${this.backendUrl}/users/get-user/${id}`)
    }

    // obtiene odos los usuarios(solo admin)
    getAllUsers(): void {
        this.httpClient.get(`${this.backendUrl}/users/all-users`)
    }

    // crea una habitacion nueva(admin)
    createRoom(): void {
        this.httpClient.post(`${this.backendUrl}/rooms/create-room`, {})
    }

    // eliminar usuario(solo admin)
    deleteUser(id: string): void {
        this.httpClient.delete(`${this.backendUrl}/users/delete-user/${id}`)
    }

    // actualiza una habitacion(solo admin)
    updateRoom(): void {
        this.httpClient.put(`${this.backendUrl}/rooms/update-room`, {})
    }

}
