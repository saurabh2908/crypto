import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';


const APP_ROUTES: Routes = [
  { path:'', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path:'chat', component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
