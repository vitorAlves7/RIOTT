import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { RouterModule } from "@angular/router";

import { AuthService } from "../@core/services/auth.service";

import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MembersComponent } from './members/members.component';

@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		CommonModule,
		RouterModule,
	],
	declarations: [
		PagesComponent,
		LoginComponent,
		ListComponent,
		HomeComponent,
		HistoryComponent,
		ActivitiesComponent,
		MembersComponent,
	],
	providers: [AuthService]
})
export class PagesModule { }
