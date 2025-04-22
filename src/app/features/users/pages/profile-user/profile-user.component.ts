import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  imports: [],
  templateUrl:'./profile-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProfileUserComponent { }
