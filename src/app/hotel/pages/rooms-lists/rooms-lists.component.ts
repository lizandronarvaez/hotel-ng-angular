import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Hotel } from '../../interfaces/hotel.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormSearchRoomComponent } from "../../../shared/formSearchRoom/formSearchRoom.component";
import { FiltersComponent } from "../../components/filters/filters.component";
import { AsideComponent } from "../../components/aside/aside.component";
import { FormBuilder } from '@angular/forms';
import { FormRoomsService } from '../../../shared/service/formRooms.service';

@Component({
    selector: 'app-hotel-lists',
    standalone: true,
    imports: [CommonModule, FormSearchRoomComponent, FiltersComponent, AsideComponent],
    templateUrl: './rooms-lists.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HotelListsComponent implements OnInit {

    public hotels: Hotel[] = [];
    public formBuilder = inject(FormBuilder);
    private _formRoomService = inject(FormRoomsService)

    private _router = inject(Router)
    private _route = inject(ActivatedRoute);
    ngOnInit(): void {
        this._route.queryParams.subscribe(params => {
            if (params['startDate'] || params['endDate'] || params['typeRoom']) {
                this._formRoomService.getForm().patchValue({
                    startDate: params['startDate'],
                    endDate: params['endDate'],
                    typeRoom: params['typeRoom']
                });
            }
        });
    };

}
