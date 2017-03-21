import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const appRoutes=[
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

];
