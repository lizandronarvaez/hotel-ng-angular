import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hotel } from '../../interfaces/hotel.interface';
import { HotelsService } from '../../services/hotels.service';
import { Router } from '@angular/router';
import { FormSearchRoomComponent } from "../../components/formSearchRoom/formSearchRoom.component";
import { FiltersComponent } from "../../components/filters/filters.component";
import { AsideComponent } from "../../components/aside/aside.component";
@Component({
    selector: 'app-hotel-lists',
    standalone: true,
    imports: [CommonModule, FormSearchRoomComponent, FiltersComponent, AsideComponent],
    templateUrl: './rooms-lists.component.html',
})
export default class HotelListsComponent implements OnInit {

    public hotels: Hotel[] = [];

    constructor(
        private hotelService: HotelsService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.hotels = this.hotelService.getHotelsData();
    }
}
