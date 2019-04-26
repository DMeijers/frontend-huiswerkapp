import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // username = this.cookieService.get('username');
  title = 'FrontendHomeworkApp';

  constructor( private cookieService: CookieService) {}

  logout() {
    this.cookieService.delete('username');
  }
}
