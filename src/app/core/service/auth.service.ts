import { inject, Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private backendUrl = environments.backendApiUrl;
    private httpClient = inject(HttpClient);

    // todo:authenticacion admin
    authenticateAdmin(): void {
        this.httpClient.post(`${this.backendUrl}/admin/auth/login`, {})
    }
    
    // todo: authenticacion user
    authenticateUser() {
        this.httpClient.post(`${this.backendUrl}/users/auth/login`, {})

    }

    // todo: registro user
    registerUser() {
        this.httpClient.post(`${this.backendUrl}/users/auth/register`, {})
    }
}
