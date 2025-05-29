import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FormRoomsService } from '../../service/formRooms.service';
import { RoomsService } from '../../../core/service/room.service';
import { SearchRoom } from '../../../features/hotel/interfaces/rooms/searchRooms.interface';
import { ValidatorsService } from '../../../core/service/validators.service';

@Component({
    selector: 'app-form-search-room',
    imports: [RouterModule, ReactiveFormsModule],
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
    private roomService = inject(RoomsService);
    private subscription: Subscription = new Subscription();


    ngOnInit(): void {
        this.subscription = this.roomService.getTypesRooms()
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
