import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../pages/material.module";

import { ModalComponent } from "./components/modal/modal.component";
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
	declarations: [
		ModalComponent,
		ButtonPrimaryComponent,
		InputEmailComponent,
		InputPasswordComponent,
		HeaderComponent,
	],
	imports: [
		CommonModule,
		MaterialModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
	],
	providers: [],
	exports: [
		ModalComponent,
		ButtonPrimaryComponent,
		InputEmailComponent,
		InputPasswordComponent,
		HeaderComponent,
	]
})
export class ThemeModule { }
