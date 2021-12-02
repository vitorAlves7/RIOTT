import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@core/services/auth.service';
import { User } from 'src/app/@theme/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: User = new User();
  public isAutheticated: boolean = false;
  public errorMessage: string;

  constructor(private authService: AuthService, private route: Router) { }

  public doLogin(): void {
    this.isAutheticated = this.authService.doLogin(this.user);
    if (!this.isAutheticated) {
      this.errorMessage = "E-mail ou senha incorretos!";
    } else {
      this.route.navigate(['/pages/list']);
    }
  }
}
