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

    // Obtener  reserva por codigo de reserva
    getBookingByBookingCode(bookingCode: string): Observable<ResponseBooking> {
        return this.httpClient.get<ResponseBooking>(`${this.backendUrl}/bookings/get-by-booking-code/${bookingCode}`,);
    }

}
