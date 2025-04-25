import { Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppService } from '../../../../core/service/app.service';

import { FormRoomsService } from '../../../../shared/service/formRooms.service';
import { ValidatorsService } from '../../../../core/service/validators.service';
import { BookingService } from '../../../../core/service/booking.service';


@Component({
    selector: 'app-reservation',
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './booking-room.component.html'
})
export default class ReservationComponent {
    
  public appService = inject(AppService);
  public bookingService = inject(BookingService);
  public formBuilder = inject(FormBuilder);
    public formRoomService = inject(FormRoomsService);
    public validatorService = inject(ValidatorsService);
    public form: FormGroup = inject(FormBuilder).group({
      bookingCode: ['', [Validators.required]],
    })

    private router = inject(Router);
    handleSubmitBooking(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const bookingCode = this.form.value.bookingCode;
        this.router.navigateByUrl(`/booking/details-booking/${bookingCode}`);
    }

}
