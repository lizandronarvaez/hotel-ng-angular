import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import 'dayjs/locale/es';

import { ListServicesComponent } from "./sections/list-services/list-services.component";
import { SectionOneComponent } from "./sections/list-rooms/list-rooms.component";
import { FormSearchRoomComponent } from "../../../shared/formSearchRoom/formSearchRoom.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterModule,
        ReactiveFormsModule,
        CommonModule,
        ListServicesComponent,
        SectionOneComponent,
        FormSearchRoomComponent
    ],
    templateUrl: './home.component.html',
})
export default class HomeComponent {

}
