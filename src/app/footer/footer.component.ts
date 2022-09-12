import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    message: string = 'Realizado por:';
    autor: any = {nombre: 'Jonatan', apellido: 'Velasco'};

}
