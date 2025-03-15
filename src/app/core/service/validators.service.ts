import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import dayjs from 'dayjs';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {

    // Clase que se encargaŕa de realizar ciertos tipos de validaciones
    public firstNameAndLastnamePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
    public emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    // METODO PARA validar el correo
    emailIsValid(formControl: FormControl): object | null {
        const email = formControl.value.trim().toLowerCase();
        if (!email.includes("@")) return { emailIncorrect: true };
        return null;
    }


    isValidField(field: string, form: FormGroup): boolean | null {
        const control = form.controls[field];
        return control.errors && control.touched;
    }
    getErrorMessage(field: string, form: FormGroup): string | null {
        const control = form.controls[field];
        let message = null;

        if (!control.errors) return null;
        if (control?.errors?.['required']) {
            if (field === 'startDate') {
                message = 'Selecciona el día de entrada';
            } else if (field === 'endDate') {
                message = 'Selecciona el día de salida';
            } else if (field === 'typeRoom') {
                message = 'Selecciona el tipo de habitación';
            } else if (field === "confirmationCode") {
                message = "Por favor, introduce un número de reserva válido";
            } else if (field === "fullName") {
                message = "Rellena el campo";
            } else if (field === "password") {
                message = "Rellena el campo";
            } else if (field === "email") {
                message = "Rellena el campo";
            }
        } else if (control?.errors?.['invalidDateRange']) {
            message = 'La fecha de salida no puede ser anterior a la de entrada';
        }
        return message;
    }

    dateRangeValidator(form: FormGroup): object | null {
        const startDate = form.get('startDate')?.value;
        const endDate = form.get('endDate')?.value;

        if (!startDate || !endDate) {
            return null;
        }

        const start = dayjs(startDate, 'DD-MM-YYYY');
        const end = dayjs(endDate, 'DD-MM-YYYY');

        if (end.isBefore(start)) {
            form.get('endDate')?.setErrors({ invalidDateRange: true });
            return { invalidDateRange: true };
        } else {
            form.get('endDate')?.setErrors(null);
        }
        return null;
    }
}
