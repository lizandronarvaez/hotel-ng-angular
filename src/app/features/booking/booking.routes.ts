import { Routes } from '@angular/router';

export const BOOKING_ROUTES: Routes = [
    {
        path: "",
        loadComponent: () => import('./layouts/layout-booking/layout-booking.component'),
        children: [
            {
                path: "create-booking",
                title: 'Reserva Habitación',
                loadComponent: () => import('./pages/create-booking/create-booking.component')
            },
            {
                path: "details-booking/:id",
                title: 'Detalles Reserva Habitación',
                loadComponent: () => import('./pages/booking-details/booking-details.component')
            },
            {
                path: "**",
                redirectTo: "login",
                pathMatch: "full"
            }
        ]
    },

];
