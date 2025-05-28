import { Routes } from "@angular/router";

export const USER_ROUTES: Routes = [
    {
        path: "",
        loadComponent: () => import('./layouts/user-layout/user-layout.component'),
        children: [
            {
                path: "profile-user",
                title: 'Clientes - Perfil Usuario',
                loadComponent: () => import('./pages/profile-user/profile-user.component')
            },
        ]
    },
]
