import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-booking',
  imports: [RouterOutlet],
templateUrl:'./layout-booking.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LayoutBookingComponent { }
