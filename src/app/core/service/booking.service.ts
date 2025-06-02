/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../../environments/environments';
import { ResponseBooking } from '../../features/hotel/interfaces/responseBooking.interface';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private backendUrl = environments.backendApiUrl;
  private httpClient = inject(HttpClient);

  // Crear un nueva reserva
  createBooking(idRoom: any, room: any, client: any): Observable<any> {
    const bookingData = { room, client };
    console.log(bookingData);
    return this.httpClient.post<boolean>(`${this.backendUrl}/bookings/new-reservation/book-room`, bookingData, {
      params: { idRoom }
    });
  }

  // eliminar reserva
  deleteBooking(booking_id: number): void {
    this.httpClient.delete(`${this.backendUrl}/bookings/cancel-booking/${booking_id}`,);
  }
  // Obtener  reserva por codigo de reserva
  getBookingByBookingCode(bookingCode: string): Observable<ResponseBooking> {
    return this.httpClient.get<ResponseBooking>(`${this.backendUrl}/bookings/get-by-booking-code/${bookingCode}`,);
  }

  // Obtener todas las habtaciones(solo admin)
  getAllBookings(): Observable<ResponseBooking> {
    return this.httpClient.get<ResponseBooking>(`${this.backendUrl}/bookings/all`);
  }

  // Obtiene las reservas de un usuario(solo admin)
  getUserBookings(idUser: string): void {
    this.httpClient.get(`${this.backendUrl}/users/get-user-bookings/${idUser}`)
  }

}
