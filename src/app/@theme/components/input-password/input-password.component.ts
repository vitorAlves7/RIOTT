import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent {

  @Input() matLabel: string = '';
  @Input() placeholder: string = '';
  @Input() classCss: string;
  @Input() id: string;
  //Caso nenhum type seja definido, terá o tipo 'text' definido.
  @Input() type: string = 'text';
  @Input() name: string;
  @Input() isReadOnly: boolean = false;

  public password = new FormControl('', [Validators.required]);
  public hide = true;

  /**
   * 
   * @returns uma mensagem de erro caso a senha esteja vazia.
   */
  getErrorMessage(): string {
    if (this.password.hasError('required')) {
      return 'Campo obrigatório';
    }
  }

}
