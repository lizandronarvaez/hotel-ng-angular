import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    // Crear un nueva reserva
    createBooking(): void {
        this.httpClient.get(`${this.backendUrl}/users/get-profile-info`)
    }

    // Obtiene los datos del usuario autenticado
    getProfileUserAuthenticate(): void {
        this.httpClient.get(`${this.backendUrl}/users/get-profile-info`)
    }

    // eliminar reserva
    deleteBooking(booking_id: number): void {
        this.httpClient.delete(`${this.backendUrl}/bookings/cancel-booking/${booking_id}`,);
    }
    
    // formulario contacto pagina contacto
    formContact(): void {
        this.httpClient.post(`${this.backendUrl}/users/form-contact}`, {})
    }
}
