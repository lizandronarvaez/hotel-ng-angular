import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface NavItem {
    title: string,
    path: string
}

@Component({
    selector: 'app-navbar',
    imports: [RouterModule, CommonModule],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    public navItem = signal<NavItem[]>([
        { path: '/', title: 'Inicio' },
        { path: '/hotel-angular/lists-rooms', title: 'Habitaciones' },
        { path: '/hotel-angular/find-booking', title: 'Mi reserva' },
        { path: '/hotel-angular/contact', title: 'Contacto' },
    ]);

    public isActive = signal(false);

    toggleNav(): void { this.isActive.update(value => !value); }

    hiddenNav(): void { this.isActive.set(false); }
}
