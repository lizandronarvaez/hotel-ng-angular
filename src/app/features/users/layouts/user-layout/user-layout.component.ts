import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-user-layout',
    imports: [RouterOutlet],
    templateUrl: './user-layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserLayoutComponent { }
