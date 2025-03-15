import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListServicesComponent } from "./sections/list-services/list-services.component";
import { SectionOneComponent } from "./sections/list-rooms/list-rooms.component";
import { FormSearchRoomComponent } from '../../../../shared/components/formSearchRoom/formSearchRoom.component';
import { ScrollBottomToTopComponent } from '../../../../shared/components/scrollBottomToTop/scroll-bottom-to-top.component';


@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        RouterModule,
        ReactiveFormsModule,
        CommonModule,
        ListServicesComponent,
        SectionOneComponent,
        FormSearchRoomComponent,
        ScrollBottomToTopComponent,
        RouterLink
    ],
    templateUrl: './home.component.html',
})
export default class HomeComponent {

}
