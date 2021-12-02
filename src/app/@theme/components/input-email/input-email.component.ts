import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.css']
})
export class InputEmailComponent {

  @Input() matLabel: string = '';
  @Input() placeholder: string = '';
  @Input() classCss: string;
  @Input() id: string;
  //Caso nenhum type seja definido, terá o tipo 'text' definido.
  @Input() type: string = 'text';
  @Input() name: string;
  @Input() isReadOnly: boolean = false;

  public email = new FormControl('', [Validators.required, Validators.email]);

  /**
   * 
   * @returns uma mensagem de erro caso o email esteja vazio OU com um valor não válido.
   */
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Campo obrigatório';
    }

    return this.email.hasError('email') ? 'Email inválido' : '';
  }

}
