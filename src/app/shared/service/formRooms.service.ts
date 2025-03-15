import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../core/service/validators.service';

@Injectable({ providedIn: 'root' })
export class FormRoomsService {

    private _formBuilder = inject(FormBuilder);
    private _validatorsService = inject(ValidatorsService);

    public searchRooms: FormGroup = this._formBuilder.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        typeRoom: ['', Validators.required]
    }, { validators: this._validatorsService.dateRangeValidator })

    getForm(): FormGroup {
        return this.searchRooms;
    }

    resetForm(): void {
        this.searchRooms.reset({
            startDate: '',
            endDate: '',
            typeRoom: '',
        });
    }
}
