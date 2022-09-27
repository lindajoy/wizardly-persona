import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import  { SigninComponent } from './components/signin/signin.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

//Main routes module
const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
