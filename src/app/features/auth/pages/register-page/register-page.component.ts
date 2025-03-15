import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppService } from '../../../../core/service/app.service';
import { ValidatorsService } from '../../../../core/service/validators.service';


@Component({
    selector: 'app-register-page',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, RouterLink],
    templateUrl: './register-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegisterPageComponent {
    public appService = inject(AppService);
    public validatorForms=inject(ValidatorsService);

    public form: FormGroup = inject(FormBuilder).group({
        fullName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3)]]
    })

    private router = inject(Router);

    handleSumbitRegister(): void {
        this.appService.showMessagePage();

        if (this.form.invalid) {
            this.form.markAllAsTouched();
        };

    }
}
