import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { HistoryComponent } from "./history/history.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { MembersComponent } from "./members/members.component";

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: '',
		component: PagesComponent,
		children: [
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'list',
				component: HomeComponent,
			},
			{
				path: 'history',
				component: HistoryComponent,
			},
			{
				path: 'activity',
				component: ActivitiesComponent,
			},
			{
				path: 'members',
				component: MembersComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
