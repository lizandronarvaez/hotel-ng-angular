import { Routes } from '@angular/router';
import HomeComponent from './features/hotel/pages/home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'hotel-angular',
        loadChildren: () => import("./features/hotel/hotel.route").then(mod => mod.HOTEL_ROUTES)
    },
    {
        path: 'auth',
        loadChildren: () => import("./features/auth/auth.routes").then(mod => mod.AUTH_ROUTES)
    },
    {
        path: 'users',
        loadChildren: () => import("./features/users/user.routes").then(mod=> mod.USER_ROUTES)
    },
    {
        path: 'admin',
        loadChildren: () => import("./features/admin/admin.routes").then(mod => mod.ADMIN_ROUTES)
    },
    {
        path:'booking',
        loadChildren:()=>import('./features/booking/booking.routes').then(mod=>mod.BOOKING_ROUTES)
    },
    {
        path: "**",
        redirectTo: "",
        pathMatch: 'full'
    }
];
