import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../../../core/service/app.service';
import { ValidatorsService } from '../../../../core/service/validators.service';
import { FormRoomsService } from '../../../../shared/service/formRooms.service';


@Component({
    selector: 'app-reservation',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './booking-room.component.html',
})
export default class ReservationComponent {
    public appService = inject(AppService);
    public validatorService = inject(ValidatorsService);
    public formBuilder = inject(FormBuilder);
    public formRoomService = inject(FormRoomsService)


    public form: FormGroup = inject(FormBuilder).group({
        confirmationCode: ['', [Validators.required]],
    })

    handleSubmitBooking(): void {
        // this.appService.showMessagePage();
        if (this.form.invalid) {
            this.form.markAllAsTouched();
        };

    }
}
