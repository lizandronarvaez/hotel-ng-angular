import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../service/app.service';

@Component({
    selector: 'app-reservation',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './booking-room.component.html',
})
export default class ReservationComponent {
    public appService = inject(AppService);


    public form: FormGroup = inject(FormBuilder).group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3)]]
    })

    handleSubmitBooking(): void {
        this.appService.showMessagePage();
        if (this.form.invalid) return;

    }
}
