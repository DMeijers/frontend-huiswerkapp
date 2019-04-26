import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {AdminComponent} from '../admin/admin.component';
import {AppComponent} from '../app.component';
import {HomeComponent} from '../home/home.component';
import {enableBindings} from '@angular/core/src/render3';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    cookieValue: string;
    username: string;
    password: string;
    alert: boolean;

    adminData = {
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

    constructor(public router: Router, private http: HttpClient, private cookieService: CookieService) {
    }

    ngOnInit() {
    }


    submit() {
        const user = {
            username: this.username,
            password: this.password
        };
        if (this.username === this.adminData.voornaam && this.password === this.adminData.wachtoord) {
            // this.router.navigateByUrl('/admin');
            this.router.navigate(['/admin']);
        } else {
            this.http.post(environment.url + '/login', user).subscribe(
                data => console.log(data),
                error => console.log(error)
            );
            this.router.navigate(['/']);
            this.cookieService.set( 'username', user.username );
            this.cookieValue = this.cookieService.get('username');
        }
    }
}
