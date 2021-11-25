import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { FormsModule } from "@angular/forms";

import { ExampleComponent } from './example/example.component';
import { LoginComponent } from "./login/login.component";
import { AuthService } from "../@core/services/auth.service";
import { ListComponent } from "./list/list.component";

@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		FormsModule,
	],
	declarations: [
		PagesComponent,
		ExampleComponent,
		LoginComponent,
		ListComponent,
	],
	providers: [AuthService]
})
export class PagesModule { }
