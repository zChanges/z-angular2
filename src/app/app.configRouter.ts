import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }       from './login/login.component';




const routes:Routes = [
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:"login",
		component:LoginComponent
	},
	{
		path:"app",
		loadChildren:'./workingArea/workingArea.module#WorkingAreaModule'
	}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }




