import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'hotel-angular',
        loadChildren: () => import("./hotel/hotel.route").then(hotel => hotel.HOTEL_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import("./auth/auth.routes").then(auth => auth.AUTH_ROUTES)

    },
    {
        path: "**",
        redirectTo: "hotel-angular",
        pathMatch: 'full'
    }
];
