import { Component } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MBU Front End Assignment';
  user: User;

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.authService.logout();
  }
}
