import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, output, signal } from '@angular/core';
import { Subscription } from 'rxjs';

import { RoomsService } from '../../../../core/service/room.service';

@Component({
    selector: 'app-room-filters',
    imports: [],
    templateUrl: './room-filters.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomFiltersComponent implements OnInit, OnDestroy {
    public priceFilter = output<string>();
    public personsFilter = output<string>();
    public textInputFilter = output<string>();
    public roomTypes = signal<string[]>([]);

    private roomService = inject(RoomsService);
    private subscription = new Subscription();

    ngOnInit(): void {
        this.subscription = this.roomService
            .getTypesRooms()
            .subscribe(
                {
                    next: (data) => this.roomTypes.set(data),
                    error: () => this.roomTypes.set([])
                }
            )
    }

    handleFilterNumPersons(value: string): void {
        this.personsFilter.emit(value)
    }

    handleFilterPrice(value: string): void {
        this.priceFilter.emit(value)
    }

    handleFilterTextInput(value: string): void {
        this.textInputFilter.emit(value)
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}
