import { Component } from '@angular/core';
import { DpDatePickerModule, IDatePickerConfig } from 'ng2-date-picker';
import dayjs from 'dayjs';
import 'dayjs/locale/es';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DpDatePickerModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  datePickerConfig: IDatePickerConfig = {
    format: 'DD-MM-YYYY',
    firstDayOfWeek: 'mo',
    min: dayjs().startOf('day').format('DD-MM-YYYY'),
  };

  constructor() {
    dayjs.locale('es');
  }
}
