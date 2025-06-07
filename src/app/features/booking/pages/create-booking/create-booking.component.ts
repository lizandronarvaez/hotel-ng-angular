import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../../../core/service/booking.service';

@Component({
  selector: 'app-create-booking',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-booking.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateBookingComponent {

  public bookingService = inject(BookingService);
  private fb = inject(FormBuilder);

  public form: FormGroup = this.fb.group({
    booking: this.fb.group({
      checkInDate: ['2025-06-20', Validators.required],
      checkOutDate: ['2025-06-25', Validators.required],
      guest: ['2', Validators.required],
      pricePerNight: ['50', Validators.required],
      totalNights: ['2', Validators.required],
      totalPriceNights: ['100', Validators.required]
    }),
    client: this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      numberPhone: ['', Validators.required],
    }),
  });

  handleSubmitForm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.bookingService.createBooking("5", this.form.get("booking")?.value, this.form.get("client")?.value)
      .subscribe(
        {
          next: (response) => console.log("✔ Reserva creada con éxito", response),
          error: (err) => console.error("❌ Error al crear la reserva:", err)
        }
      )
  }
}
