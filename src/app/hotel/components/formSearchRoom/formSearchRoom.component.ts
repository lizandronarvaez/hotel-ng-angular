import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import dayjs from 'dayjs';
import { DpDatePickerModule, IDatePickerConfig } from 'ng2-date-picker';
import { HotelsService } from '../../services/hotels.service';
import { AppService } from '../../../service/app.service';

@Component({
  selector: 'app-form-search-room',
  standalone: true,
    imports: [DpDatePickerModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formSearchRoom.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSearchRoomComponent {
    public appService=inject(AppService);

    public hotelForm = new FormGroup({
        startDate: new FormControl("", { nonNullable: true }),
        endDate: new FormControl("", { nonNullable: true }),
        cityName: new FormControl("", { nonNullable: true })
    })

    datePickerConfig: IDatePickerConfig = {
        format: 'DD-MM-YYYY',
        firstDayOfWeek: 'mo',
        min: dayjs().startOf('day').format('DD-MM-YYYY'),
    };

    constructor(
        private hotelService: HotelsService,
        private router: Router
    ) {
        dayjs.locale('es');
    }

    onSubmitFormHotels(): void {
        this.appService.showMessagePage();
        return;

        const startDate = dayjs(this.hotelForm.value.startDate, 'DD-MM-YYYY').format('YYYY-MM-DD') ?? '';
        const endDate = dayjs(this.hotelForm.value.endDate, 'DD-MM-YYYY').format('YYYY-MM-DD') ?? '';
        const cityName = this.hotelForm.value.cityName ?? '';
        if (startDate.length < 1 || endDate.length < 1 || cityName.length < 1) return;

        this.getHotels(startDate, endDate, cityName)
        this.router.navigateByUrl("/list-hotels")
    }


    getHotels(startDate: string, endDate: string, cityName: string): void {
        this.hotelService.getHotels(startDate, endDate, cityName)
            .subscribe({
                next: (hotels) => { this.hotelService.addHotels(hotels) },
                error: (error) => { console.error('Error al obtener hoteles:', error) }
            });

    }
}
