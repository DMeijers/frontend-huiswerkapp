import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    login = {
        id: 1,
        voornaam: 'berend',
        achternaam: 'lijer',
        email: 'berendisgeil@hoertje.nl',
        wachtoord: 'ikbenjohan',
        klas: '2A',
        geboortedatum: '28jan2018' ,
        adress: 'yeetsraat69',
        role: 1
    };

    constructor() {
    }

    ngOnInit() {
    }

}
