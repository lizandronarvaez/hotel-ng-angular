import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-layouts',
    imports: [RouterOutlet,RouterLink],
    templateUrl: './admin-layouts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutsComponent { }
