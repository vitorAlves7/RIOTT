import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/@theme/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    console.log(this.user);
  }

  public doLogin(): void {
    this.authService.doLogin(this.user);

    console.log(this.authService.userAuthenticated);
  }
}
