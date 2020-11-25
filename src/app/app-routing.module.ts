import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavComponent } from './nav/nav.component';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from './home/home.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'signup',
    component: SignupFormComponent
  },

  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
