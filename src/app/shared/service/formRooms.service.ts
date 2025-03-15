import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormRoomsService {

    private _formBuilder = inject(FormBuilder);

    public searchRooms: FormGroup = this._formBuilder.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        typeRoom: ['', Validators.required]
    })

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
