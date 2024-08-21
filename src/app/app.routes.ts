
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignUpComponent } from './components/signUp/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  {path:'signup',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path:'adminLogin',component:LoginComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }) 
  export class AppRoutingModule { }


