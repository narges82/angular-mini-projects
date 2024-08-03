import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },

  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
