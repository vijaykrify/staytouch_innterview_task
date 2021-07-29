import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatemeetComponent } from './components/create_meetlist/create_meetlist.component';
import { EditmeetComponent } from './components/edit_meetlist/edit_meetlist.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatemeetComponent,
    EditmeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    NgxIntlTelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
