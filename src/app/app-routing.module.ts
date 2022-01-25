import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './components/form/form.component';
import { DesktopComponent } from './fonts/desktop/desktop.component';
import { LoginComponent } from './fonts/login/login.component';

const routes: Routes = [

  {path: '', redirectTo: 'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'desktop', component: DesktopComponent, canActivate:[AuthGuard]},
  {path: 'registeration/new', component: FormComponent, canActivate:[AuthGuard]},
  {path: 'registeration/edit/:id', component: FormComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
