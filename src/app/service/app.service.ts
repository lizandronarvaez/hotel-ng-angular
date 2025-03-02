import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({ providedIn: 'root' })
export class AppService {

    public showMessagePage(): void {
        Swal.fire({
            icon: "info",
            // title: "Estamos desarrollando esta funcionalidad",
            text:"Estamos desarrollando esta funcionalidad",
            showConfirmButton: false,
            timer: 1500
          });
    }

}
