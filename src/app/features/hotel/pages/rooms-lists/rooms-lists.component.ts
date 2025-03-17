import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FiltersComponent } from "../../components/filters/filters.component";
import { FormBuilder } from '@angular/forms';
import { Room } from '../../interfaces/rooms/room.interface';
import { RoomsService } from '../../services/rooms.service';
import { Subscription } from 'rxjs';
import { FormSearchRoomComponent } from '../../../../shared/components/formSearchRoom/formSearchRoom.component';
import { FormRoomsService } from '../../../../shared/service/formRooms.service';

@Component({
    selector: 'app-rooms-lists',
    imports: [CommonModule, FormSearchRoomComponent, FiltersComponent, RouterLink],
    templateUrl: './rooms-lists.component.html'
})
export default class RoomsListsComponent implements OnInit, OnDestroy {

    public formBuilder = inject(FormBuilder);
    public rooms = signal<Room[]>([]);

    public numberPage = signal<number>(0);
    private itemsPerPage = signal<number>(5);
    public totalPages = signal<number>(0);

    private roomService = inject(RoomsService);
    private formRoomService = inject(FormRoomsService)
    private router = inject(Router)
    private route = inject(ActivatedRoute);

    private subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.getAllRooms();
    };
    getAllRooms(): void {
        const roomSubscription = this.roomService.getAllRooms(this.numberPage(), this.itemsPerPage())
            .subscribe({
                next: (data) => {
                    this.rooms.set(data.roomList)
                    this.totalPages.set(data.totalPages)
                    console.log(data)
                },
                error: () => this.rooms.set([])
            });
        this.subscription.add(roomSubscription);
    }
    getServiceIcon(serviceName: string): string {
        const name = serviceName.toLowerCase();
        if (name.includes('wi-fi')) return 'fas fa-wifi';
        if (name.includes('parking')) return 'fas fa-parking';
        if (name.includes('desayuno')) return 'fas fa-coffee';
        if (name.includes('aire')) return 'fas fa-snowflake';
        if (name.includes('tv')) return 'fas fa-tv';
        if (name.includes('infantil')) return 'fas fa-child';
        if (name.includes('tv')) return 'fas fa-tv';

        return 'ri-checkbox-circle-line';
    }

    handleChangePage(page: number): void {
        this.numberPage.update((currentPage) => {
            const newPage = currentPage + page;

            if (newPage >= 0 && newPage < this.totalPages()) {
                return newPage;
            }
            return currentPage;
        });
        this.getAllRooms();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

// this._route.queryParams.subscribe(params => {
//     if (params['startDate'] || params['endDate'] || params['typeRoom']) {
//         this._formRoomService.getForm().patchValue({
//             startDate: params['startDate'],
//             endDate: params['endDate'],
//             typeRoom: params['typeRoom']
//         });
//     }
// });
