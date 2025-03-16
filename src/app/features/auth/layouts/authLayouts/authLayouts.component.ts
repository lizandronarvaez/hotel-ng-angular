import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-auth-layouts',
    imports: [RouterOutlet],
    templateUrl: './authLayouts.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AuthLayoutsComponent { }
