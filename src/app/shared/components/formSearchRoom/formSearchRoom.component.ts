import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { ValidatorsService } from '../../../core/service/validators.service';
import { FormRoomsService } from '../../service/formRooms.service';
import { RoomsService } from '../../../features/hotel/services/rooms.service';

@Component({
    selector: 'app-form-search-room',
    imports: [RouterModule, ReactiveFormsModule, CommonModule],
    templateUrl: './formSearchRoom.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSearchRoomComponent implements OnInit, OnDestroy {


    public formBuilder = inject(FormBuilder);
    public validatorService = inject(ValidatorsService);
    public formRoomService = inject(FormRoomsService)
    public roomTypes = signal<string[]>([]);

    private router = inject(Router)
    private hotelService = inject(RoomsService);
    private subscription: Subscription = new Subscription();


    ngOnInit(): void {
        const suscriptionTypeRooms = this.hotelService.getTypesRooms().subscribe({
            next: (data) => this.roomTypes.set(data),
            error: () => this.roomTypes.set([])
        })
        this.subscription.add(suscriptionTypeRooms);
    }


    onSubmitSearchRooms(): void {
        if (this.formRoomService.getForm().invalid) {
            this.formRoomService.getForm().markAllAsTouched();
            return;
        }
        this.router.navigate(['/hotel-angular/lists-rooms'], {
            queryParams: this.formRoomService.getForm().value
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
