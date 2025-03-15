import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ValidatorsService } from '../../../core/service/validators.service';
import { FormRoomsService } from '../../service/formRooms.service';

@Component({
    selector: 'app-form-search-room',
    standalone: true,
    imports: [RouterModule, ReactiveFormsModule, CommonModule],
    templateUrl: './formSearchRoom.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSearchRoomComponent {

    public formBuilder = inject(FormBuilder);
    public validatorService = inject(ValidatorsService);
    public formRoomService = inject(FormRoomsService)

    private _router = inject(Router)

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
