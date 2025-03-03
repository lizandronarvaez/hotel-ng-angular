import { Component, inject } from '@angular/core';
import { AppService } from '../../../../../service/app.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-contact',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './form-contact.component.html',
})
export class FormContactComponent {
    public appService = inject(AppService);
    public form: FormGroup = inject(FormBuilder).group({
        fullName: ['', [Validators.email, Validators.required]],
        phoneNumber: ['', [Validators.required, Validators.minLength(3)]],
        messageBody: ['', [Validators.required, Validators.minLength(3)]]
    })

    handleSubmitForm(): void {
        this.appService.showMessagePage();
    }
}
