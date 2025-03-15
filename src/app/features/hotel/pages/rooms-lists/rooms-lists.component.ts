import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { FiltersComponent } from "../../components/filters/filters.component";
import { FormBuilder } from '@angular/forms';
import { Room } from '../../interfaces/room.interface';
import { RoomsService } from '../../services/rooms.service';
import { Subscription } from 'rxjs';
import { FormSearchRoomComponent } from '../../../../shared/components/formSearchRoom/formSearchRoom.component';
import { FormRoomsService } from '../../../../shared/service/formRooms.service';

@Component({
    selector: 'app-rooms-lists',
    standalone: true,
    imports: [CommonModule, FormSearchRoomComponent, FiltersComponent, RouterLink],
    templateUrl: './rooms-lists.component.html',
})
export default class RoomsListsComponent implements OnInit, OnDestroy {

    public rooms = signal<Room[]>([]);
    public formBuilder = inject(FormBuilder);

    private roomService = inject(RoomsService);
    private formRoomService = inject(FormRoomsService)
    private router = inject(Router)
    private route = inject(ActivatedRoute);
    private subscription: Subscription = new Subscription();

    ngOnInit(): void {
        const roomSubscription = this.roomService.getAllRooms()
            .subscribe({
                next: (data) => {
                    console.log(data);
                    this.rooms.set(data.roomList);
                },
                error: (error) => {
                    console.error('Error al obtener las habitaciones:', error);
                    this.rooms.set([]);
                }
            });
        this.subscription.add(roomSubscription);
    };

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
