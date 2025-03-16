import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormRoomsService {

    private formBuilder = inject(FormBuilder);


    public searchRooms: FormGroup = this.formBuilder.group({
        checkInDate: ['', Validators.required],
        checkOutDate: ['', Validators.required],
        roomType: ['', Validators.required]
    })

    getForm(): FormGroup {
        return this.searchRooms;
    }

    resetForm(): void {
        this.searchRooms.reset({
            checkInDate: '',
            checkOutDate: '',
            roomType: '',
        });
    }
}
