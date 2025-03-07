import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: "",
        loadComponent: () => import('./layouts/authLayouts/authLayouts.component'),
        children: [
            {
                path: "login",
                title: 'Hotel AngularNG - Login',
                loadComponent: () => import('./pages/login-page/login-page.component')
            },
            {
                path: "register",
                title: 'Hotel AngularNG - Registro',
                loadComponent: () => import('./pages/register-page/register-page.component')
            },
            {
                path: "admin",
                title: 'Hotel AngularNG - Acceso Admin',
                loadComponent: () => import('./pages/admin/admin.component')
            },
            {
                path: "**",
                redirectTo: "",
                pathMatch: "full"
            }
        ]
    }


]
