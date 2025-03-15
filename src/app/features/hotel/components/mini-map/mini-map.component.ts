import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

@Component({
    selector: 'app-mini-map',
    standalone: true,
    imports: [],
    templateUrl: './mini-map.component.html',
})
export class MiniMapComponent implements AfterViewInit {

    @ViewChild('map')
    public divMap?: ElementRef;

    public zoom = 15;
    public currentLatLong: LngLat = new LngLat(-0.32502729092736765, 39.47988792441203);

    ngAfterViewInit(): void {
        if (!this.divMap?.nativeElement) throw "No se recibió el elemento HTML";

        const map = new Map({
            container: this.divMap?.nativeElement,
            style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=uamSLE4oRDuDDHTMig9a',
            center: this.currentLatLong,
            zoom: this.zoom,
            dragPan: false,
            interactive: false,
            attributionControl: false
        })
        new Marker({
            color: 'red',
        }).setLngLat(this.currentLatLong).addTo(map);

        // marker.getElement().addEventListener('click', () => {
        //     map.flyTo({
        //         center: this.currentLatLong,
        //         zoom: this.zoom,
        //         essential: true
        //     });
        // });
    }
}
