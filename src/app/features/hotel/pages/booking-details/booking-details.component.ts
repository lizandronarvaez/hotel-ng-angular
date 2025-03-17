import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { map } from 'rxjs';

import { BookingService } from '../../services/booking.service';

@Component({
    selector: 'app-booking-details',
    imports: [],
    templateUrl: './booking-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BookingDetailsComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private bookingService = inject(BookingService);

    public bookingId = signal<string | null>(null);

    // TODO:data para mostrar la reserva


    ngOnInit(): void {

        // verifica que tiene el parametro en la url
        if (!this.route.snapshot.paramMap.get('id')) {
            this.router.navigateByUrl('/hotel-angular/find-booking');
        }

        // lo setea en el signal
        this.bookingId.set(this.route.snapshot.paramMap.get('id'));

        const bookingId = this.bookingId();
        if (bookingId) {
            this.bookingService.getBookingByBookingCode(bookingId)
                .pipe(
                    // tranforma la data y obtiene los daos de la reserva
                    map((response) => {
                        return response.booking;
                    })
                )
                .subscribe({
                    next: (data) => {
                        console.log(data);
                    },
                    error: (error) => {
                        console.log(error);
                    }
                });
        }
        console.log('ID de la reserva:', this.bookingId());
    }
}
