import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

import { ValidatorsService } from '../../../core/service/validators.service';
import { FormRoomsService } from '../../service/formRooms.service';
import { RoomsService } from '../../../features/hotel/services/rooms.service';
import { SearchRoom } from '../../../features/hotel/interfaces/rooms/searchRooms.interface';

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
    public searchRooms = output<SearchRoom>();

    private activateRouter = inject(ActivatedRoute)
    private router = inject(Router)
    private hotelService = inject(RoomsService);
    private subscription: Subscription = new Subscription();


    ngOnInit(): void {
        this.subscription = this.hotelService.getTypesRooms()
            .subscribe({
                next: (data) => this.roomTypes.set(data),
                error: () => this.roomTypes.set([])
            })

    }


    onSubmitSearchRooms(): void {
        if (this.formRoomService.getForm().invalid) {
            this.formRoomService.getForm().markAllAsTouched();
            return;
        }

        this.router.navigate(['/hotel-angular/lists-rooms'], {
            queryParams: this.formRoomService.getForm().value
        });
        this.searchRooms.emit(this.formRoomService.getForm().value)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
