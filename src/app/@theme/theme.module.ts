import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ModalComponent } from "./components/modal/modal.component";
import { InputComponent } from "./components/input/input.component";

@NgModule({
	declarations: [
		WelcomeComponent,
		ModalComponent,
		InputComponent,
	],
	imports: [
		CommonModule,
	],
	providers: [],
	exports: [
		WelcomeComponent,
		ModalComponent,
		InputComponent,
	]
})
export class ThemeModule { }
