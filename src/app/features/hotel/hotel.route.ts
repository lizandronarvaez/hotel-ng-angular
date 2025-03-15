import { Routes } from '@angular/router';

export const HOTEL_ROUTES: Routes = [

    {
        path: "",
        title: 'Hotel AngularNG',
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: "lists-rooms",
        title: 'Lista de Habitaciones',
        loadComponent: () => import('./pages/rooms-lists/rooms-lists.component')
    },
    {
        path: "find-booking",
        title: 'Mi reserva',
        loadComponent: () => import('./pages/booking-room/booking-room.component')
    },
    {
        path: "contact",
        title: 'Contacto',
        loadComponent: () => import('./pages/contact/contact.component')
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: "full"
    }
]
