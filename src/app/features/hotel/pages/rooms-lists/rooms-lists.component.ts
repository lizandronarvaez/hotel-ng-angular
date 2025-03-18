import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

import { FiltersComponent } from "../../components/filters/filters.component";
import { FormRoomsService } from '../../../../shared/service/formRooms.service';
import { FormSearchRoomComponent } from '../../../../shared/components/formSearchRoom/formSearchRoom.component';
import { Room } from '../../interfaces/rooms/room.interface';
import { RoomItemComponent } from "../../components/room-item/room-item.component";
import { RoomsService } from '../../services/rooms.service';
import { SkeletonLoaderComponent } from "../../components/skeleton-loader/squeleton-loader.component";

@Component({
    selector: 'app-rooms-lists',
    imports: [CommonModule, FormSearchRoomComponent, FiltersComponent, SkeletonLoaderComponent, RoomItemComponent],
    templateUrl: './rooms-lists.component.html'
})
export default class RoomsListsComponent implements OnInit, OnDestroy {

    public formBuilder = inject(FormBuilder);
    public rooms = signal<Room[]>([]);

    public numberPage = signal<number>(0);
    private itemsPerPage = signal<number>(4);
    public totalPages = signal<number>(0);
    public isLoading = signal<boolean>(false);

    private roomService = inject(RoomsService);
    private formRoomService = inject(FormRoomsService)
    private router = inject(Router)
    private route = inject(ActivatedRoute);

    private subscription: Subscription = new Subscription();

    ngOnInit(): void {
        this.getAllRooms(this.numberPage());
    };

    getAllRooms(page: number): void {
        this.isLoading.set(true);
        const roomSubscription = this.roomService.getAllRooms(page, this.itemsPerPage())
            .subscribe({
                next: (data) => {
                    this.rooms.set(data.roomList);
                    this.totalPages.set(data.totalPages);
                    this.isLoading.set(false)
                },
                error: () => {
                    this.rooms.set([]);
                    this.isLoading.set(false);
                }

            });
        this.subscription.add(roomSubscription);
    }

    handleChangePage(page: number): void {
        this.numberPage.update((currentPage) => {
            const newPage = currentPage + page;
            const isValidPage = newPage >= 0 && newPage < this.totalPages();

            if (isValidPage) this.getAllRooms(newPage);
            return isValidPage ? newPage : currentPage;
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }


}
