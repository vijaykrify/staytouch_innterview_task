import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditmeetComponent } from './components/edit_meetlist/edit_meetlist.component';
import { CreatemeetComponent } from './components/create_meetlist/create_meetlist.component';
import {AuthguardService} from './services/authguard.service'

// const routes: Routes = [{path:'',component:LoginComponent},{path:'dashboard',component:DashboardComponent,canActivate:[AuthguardService],children:[{path:'create',component:CreatemeetComponent,canActivate:[AuthguardService]},{path:'edit/:id',component:EditmeetComponent,canActivate:[AuthguardService]}]}];
const routes: Routes = [{path:'',component:LoginComponent},{path:'dashboard',component:DashboardComponent,canActivate:[AuthguardService]},{path:'create',component:CreatemeetComponent,canActivate:[AuthguardService]},{path:'edit/:id',component:EditmeetComponent,canActivate:[AuthguardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
