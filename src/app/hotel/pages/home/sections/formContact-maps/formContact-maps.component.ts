import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MiniMapComponent } from '../../../../components/mini-map/mini-map.component';
import { FormContactComponent } from '../../../../components/form-contact/form-contact.component';


@Component({
    selector: 'app-form-contact-maps',
    standalone: true,
    imports: [MiniMapComponent, FormContactComponent],
    templateUrl: './formContact-maps.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContactMapsComponent {


}
