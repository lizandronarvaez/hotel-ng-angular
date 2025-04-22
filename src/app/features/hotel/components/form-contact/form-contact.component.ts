import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { AppService } from '../../../../core/service/app.service';
import { ValidatorsService } from '../../../../core/service/validators.service';
import { environments } from '../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-form-contact',
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './form-contact.component.html'
})
export class FormContactComponent {

    public validatorsForms = inject(ValidatorsService);
    public appService = inject(AppService);
    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    public form: FormGroup = inject(FormBuilder)
        .group({
            fullName: ['', Validators.required],
            email: ['', [Validators.email, Validators.required]],
            numberPhone: [''],
            message: ['', [Validators.required, Validators.minLength(10)]]
        })

    handleSubmitForm(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.httpClient.post(`${this.backendUrl}/users/form-contact`, this.form.value).subscribe({
            next: (data) => {
                console.log('Respuesta del backend:', data);

            },
            error: (error) => {
                console.error('Error al enviar el formulario:', error);
            }
        });
        
        this.form.reset()
        // TODO: REALIZAR ENVIO DE MENSAJE DE CONTACTO AL BACKEND
        // this.appService.showMessagePage();
    }

}
