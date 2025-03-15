import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { AppService } from '../../../../core/service/app.service';
import { ValidatorsService } from '../../../../core/service/validators.service';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, RouterLink],
    templateUrl: './login-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPageComponent {
    public appService = inject(AppService);
    public validatorForms = inject(ValidatorsService);
    private httpClient = inject(HttpClient);

    public form: FormGroup = inject(FormBuilder).group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3)]]
    })

    private router = inject(Router);

    login(): void {
      if (this.form.invalid) {
          this.appService.showMessagePage();
            this.form.markAllAsTouched();
        };
        console.log(this.form.value)
        this.httpClient.post("http://localhost:3000/api/v1/users/auth/login", this.form.value).pipe(
            tap(data => {
                console.log(data)
            })
        ).subscribe()
    }
}
