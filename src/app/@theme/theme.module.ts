import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ModalComponent } from "./components/modal/modal.component";
import { MaterialModule } from "../pages/material.module";
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';

@NgModule({
	declarations: [
		ModalComponent,
		ButtonPrimaryComponent,
		InputEmailComponent,
		InputPasswordComponent,
	],
	imports: [
		CommonModule,
		MaterialModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	exports: [
		ModalComponent,
		ButtonPrimaryComponent,
		InputEmailComponent,
		InputPasswordComponent,
	]
})
export class ThemeModule { }
