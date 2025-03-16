import { Routes } from '@angular/router';
import HomeComponent from './features/hotel/pages/home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'hotel-angular',
        loadChildren: () => import("./features/hotel/hotel.route").then(hotel => hotel.HOTEL_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import("./features/auth/auth.routes").then(auth => auth.AUTH_ROUTES)
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: 'full'
    }
];
