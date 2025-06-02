import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    // Obtiene un usuario
    getUser(id: string): void {
        this.httpClient.get(`${this.backendUrl}/users/get-user/${id}`)
    }

    // obtiene odos los usuarios(solo admin)
    getAllUsers(): void {
        this.httpClient.get(`${this.backendUrl}/users/all-users`)
    }

    // eliminar usuario(solo admin)
    deleteUser(id: string): void {
        this.httpClient.delete(`${this.backendUrl}/users/delete-user/${id}`)
    }

    // Obtiene los datos del usuario autenticado
    getProfileUserAuthenticate(): void {
        this.httpClient.get(`${this.backendUrl}/users/get-profile-info`)
    }


    // formulario contacto pagina contacto
    formContact(): void {
        this.httpClient.post(`${this.backendUrl}/users/form-contact}`, {})
    }
}
