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
    if((user.email === 'liviaminucelli@gmail.com' && user.password === '1234') ||
        (user.email === 'vitor.fer.alves7@gmail.com' && user.password === '5678') ||
        (user.email === 'vitor.alves07750@outlook.com' && user.password === '9123') ||
        (user.email === 'joao.firmino@tupper.com' && user.password === '4567') ||
        (user.email === 'rosimaria.tavares@gmail.com' && user.password === '891') ||
        (user.email === 'letícia.ferreira@gmail.com' && user.password === '234') ||
        (user.email === 'gustavo.pereira@hotmail.com' && user.password === '5678') ) {
      this.userAuthenticated = true;

      this.router.navigate(['/pages/list']);
    } else {
      this.userAuthenticated = false;
    }
  }
}
