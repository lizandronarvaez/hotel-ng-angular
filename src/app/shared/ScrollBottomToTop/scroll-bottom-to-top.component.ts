import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-scroll-bottom-to-top',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './scroll-bottom-to-top.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollBottomToTopComponent {
    showButton = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.showButton = window.scrollY > 200;
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
