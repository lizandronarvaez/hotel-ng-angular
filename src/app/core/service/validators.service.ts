import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
            if (field === 'checkInDate') {
                message = 'Selecciona el día de entrada';
            } else if (field === 'checkOutDate') {
                message = 'Selecciona el día de salida';
            } else if (field === 'roomType') {
                message = 'Selecciona el tipo de habitación';
            } else if (field === "bookingCode") {
                message = "Por favor, introduce un número de reserva válido";
            } else if (field === "fullName") {
                message = "Rellena el campo";
            } else if (field === "password") {
                message = "Rellena el campo";
            } else if (field === "email") {
                message = "Rellena el campo";
            }
        }
        return message;
    }
}
