import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import dayjs from 'dayjs';
import { DpDatePickerModule, IDatePickerConfig } from 'ng2-date-picker';

import { FormRoomsService } from '../service/formRooms.service';
import { ValidatorsService } from '../service/validators.service';
dayjs.locale('es');

@Component({
    selector: 'app-form-search-room',
    standalone: true,
    imports: [DpDatePickerModule, RouterModule, ReactiveFormsModule, CommonModule],
    templateUrl: './formSearchRoom.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSearchRoomComponent {

    public formBuilder = inject(FormBuilder);
    public validatorService = inject(ValidatorsService);
    public formRoomService = inject(FormRoomsService)

    private _router = inject(Router)

    datePickerConfig: IDatePickerConfig = {
        format: 'DD-MM-YYYY',
        firstDayOfWeek: 'mo',
        min: dayjs().startOf('day').format('DD-MM-YYYY'),
    };

    constructor() {
        dayjs.locale('es');
    }

    onSubmitSearchRooms(): void {
        if (this.formRoomService.getForm().invalid) {
            this.formRoomService.getForm().markAllAsTouched();
            return;
        }

        this._router.navigate(['/hotel-angular/lists-rooms'], {
            queryParams: this.formRoomService.getForm().value
        });
    }

    isValidField(field: string) {
        return this.validatorService.isValidField(field, this.formRoomService.getForm());
    }

    errorFieldMessage(field: string) {
        return this.validatorService.getErrorMessage(field, this.formRoomService.getForm());
    }

}
