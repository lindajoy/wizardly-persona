import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SigninComponent } from './components/signin/signin.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { WizardlyCharactersComponent } from './pages/characters/characters.component';
import { AuthenticationGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/deactivate.guard';
import { CharactersResolver } from './guards/resolve-guard';

//Main routes module
const routes: Routes = [

  // CanActivate Guard
  { path: 'home', 
    component: LandingPageComponent,    
    canActivate: [AuthenticationGuard],
  },
  // canDeactivate Guard
  { 
    path: 'sign-in',
    component: SigninComponent, 
    canDeactivate : [CanDeactivateGuard],
  },

  

  // { 
  //   path: 'fillform',
  //   component: UserDetailsComponent, 
  //   canDeactivate : [CanDeactivateGuard] 
  // },
  { 
    path: 'characters', 
    component: WizardlyCharactersComponent,
    resolve: {CharactersResolver}
  },
  { path: 'register-user', component: SignUpComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
