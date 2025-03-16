import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, HostListener, signal } from '@angular/core';

@Component({
    selector: 'app-scroll-bottom-to-top',
    imports: [CommonModule],
    templateUrl: './scroll-bottom-to-top.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollBottomToTopComponent {

    public scrollPosition = signal<number>(0);
    public showButton = computed(() => this.scrollPosition() > 400);

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.scrollPosition.set(window.scrollY);
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
