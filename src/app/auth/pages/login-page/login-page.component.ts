import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppService } from '../../../service/app.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, RouterLink],
    templateUrl: './login-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPageComponent {
    public appService = inject(AppService);

    public form: FormGroup = inject(FormBuilder).group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3)]]
    })

    private router = inject(Router);

    login(): void {
        this.appService.showMessagePage();

        if (this.form.invalid) return;

    }
}
