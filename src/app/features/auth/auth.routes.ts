import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: "",
        loadComponent: () => import('./layouts/authLayouts/authLayouts.component'),
        children: [
            {
                path: "login",
                title: 'Hotel AngularNG - Login Cliente',
                loadComponent: () => import('./pages/login-user/login-page.component')
            },
            {
                path: "register",
                title: 'Hotel AngularNG - Registro Cliente',
                loadComponent: () => import('./pages/register-user/register-page.component')
            },
            {
                path: "admin",
                title: 'Hotel AngularNG - Acceso Admin',
                loadComponent: () => import('./pages/login-admin/admin.component')
            },
            {
                path: "**",
                redirectTo: "login",
                pathMatch: "full"
            }
        ]
    },

];
