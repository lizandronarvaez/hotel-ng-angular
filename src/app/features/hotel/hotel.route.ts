import { Routes } from '@angular/router';

export const HOTEL_ROUTES: Routes = [

    {
        path: "lists-rooms",
        title: 'Lista de Habitaciones',
        loadComponent: () => import('./pages/rooms-lists/rooms-lists.component')
    },
    {
        path: "find-booking",
        title: 'Mi reserva',
        loadComponent: () => import('./pages/booking-room/booking-room.component'),
    },
    {
        path: "details-booking/:id",
        loadComponent: () => import('./pages/booking-details/booking-details.component')
    },
    {
        path: "contact",
        title: 'Contacto',
        loadComponent: () => import('./pages/contact/contact.component')
    },
    {
        path: "**",
        redirectTo: "/",
        pathMatch: "full"
    }
]
