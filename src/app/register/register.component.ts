import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerUser() {
    const user = {
      username: this.username,
      email: this.email,
      plainPassword: this.password
    };
    this.http.get(environment.url + '/api/users').subscribe(
        data => console.log(data)
    );
    this.http.post(environment.url + '/api/users', user).subscribe(
        data => console.log(data),
        error => console.log(error)
    );
  }
}
