import { ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
    selector: 'app-filters',
    imports: [],
    templateUrl: './filters.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {
    public priceFilter = output<string>();
    public personsFilter = output<string>();
    public textInputFilter = output<string>();


    handleFilterNumPersons(value: string): void {
        this.personsFilter.emit(value)
    }

    handleFilterPrice(value: string): void {
        this.priceFilter.emit(value)
    }

    handleFilterTextInput(value: string): void {
        this.textInputFilter.emit(value)
    }
}
