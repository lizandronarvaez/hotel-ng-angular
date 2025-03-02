import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-list-services',
    standalone: true,
    imports: [],
    templateUrl: './list-services.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListServicesComponent { }
