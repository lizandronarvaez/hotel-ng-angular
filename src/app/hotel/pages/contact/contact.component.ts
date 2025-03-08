import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MiniMapComponent } from "../../components/mini-map/mini-map.component";
import { FormContactComponent } from "../../components/form-contact/form-contact.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MiniMapComponent, FormContactComponent],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactComponent { }
