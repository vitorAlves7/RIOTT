import { Injectable } from '@angular/core';
import { User } from 'src/app/@theme/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  doLogin(user: User): boolean {
    if (user.email === 'liviaminucelli@gmail.com' && user.password === '1234') {
      return true;
    } else {
      return false;
    }
  }
}
