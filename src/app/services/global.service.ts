import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
    private hostComplet: string = 'http://localhost:8080';
    // private hostComplet: string = 'https://test-api-se.herokuapp.com';

    constructor() { }

    getRutaBase(){
        return this.hostComplet;
    }

}