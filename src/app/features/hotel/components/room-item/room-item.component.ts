import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

import { Room } from '../../interfaces/rooms/room.interface';

@Component({
    selector: 'app-room-item',
    imports: [CommonModule],
    templateUrl: './room-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomItemComponent {

    public room = input.required<Room>();

    private router=inject(Router);

    handleCreateBooking():void{
        this.router.navigateByUrl("/booking/create-booking")
    }
    // obteiene el icon de los servicios de la habitación
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
}
