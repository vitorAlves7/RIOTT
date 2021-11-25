import { Injectable } from '@angular/core';
import { User } from 'src/app/@theme/interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userAuthenticated: boolean = false;

  constructor(private router: Router) { }

  doLogin(user: User): void {
    if (user.email === 'liviaminucelli@gmail.com' && user.password === '1234') {
      this.userAuthenticated = true;

      this.router.navigate(['/pages/list']);
    } else {
      this.userAuthenticated = false;
    }
  }
}
