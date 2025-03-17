import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppService } from '../../../../core/service/app.service';
import { ValidatorsService } from '../../../../core/service/validators.service';


@Component({
    selector: 'app-form-contact',
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './form-contact.component.html'
})
export class FormContactComponent {

    public validatorsForms = inject(ValidatorsService);
    public appService = inject(AppService);

    public form: FormGroup = inject(FormBuilder).group({
        fullName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        phoneNumber: [''],
        message: ['', [Validators.required, Validators.minLength(10)]]
    })

    handleSubmitForm(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        // TODO: REALIZAR ENVIO DE MENSAJE DE CONTACTO AL BACKEND
        this.appService.showMessagePage();
    }

}
