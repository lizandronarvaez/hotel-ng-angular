import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
    {
        path: "",
        loadComponent: () => import('./layouts/admin-layouts/admin-layouts.component'),
        children: [
            {
                path: "dashboard",
                title: 'Administración - Dashboard',
                loadComponent: () => import('./pages/admin-hotel-dashboard/admin-hotel-dashboard.component')
            },
            {
                path: "list-rooms",
                title: 'Administración - Listado de hoteles',
                loadComponent: () => import('./pages/admin-hotel-list/admin-hotel-list.component')
            },
            {
                path: "list-users",
                title: 'Administración - Listado Clientes',
                loadComponent: () => import('./pages/admin-hotel-users/admin-hotel-users.component')
            },
            {
                path: "list-bookings",
                title: 'Administración - Listado Reservas',
                loadComponent: () => import('./pages/admin-hotel-bookings/admin-hotel-bookings.component')
            },
            {
                path: "**",
                redirectTo: "hotel-list",
                pathMatch: 'full'
            }

        ]
    },
]
