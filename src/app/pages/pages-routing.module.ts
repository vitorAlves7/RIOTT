import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";

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
				component: ListComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
