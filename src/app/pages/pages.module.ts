import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login/login.component";
import { AuthService } from "../@core/services/auth.service";
import { ListComponent } from "./list/list.component";
import { MaterialModule } from "./material.module";

@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		CommonModule,
	],
	declarations: [
		PagesComponent,
		LoginComponent,
		ListComponent,
	],
	providers: [AuthService]
})
export class PagesModule { }
