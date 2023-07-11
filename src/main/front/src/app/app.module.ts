import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/views/login/login.component';
import { AccessformComponent } from './user/components/accessform/accessform.component';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';
import { HeaderComponent } from './shared/header/header.component';
import { EditFormComponent } from './user/components/edit-form/edit-form.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardCountComponent } from './dashboard-count/dashboard-count.component'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccessformComponent,
    DashboardFamiliesComponent,
    HeaderComponent,
    AddFormComponent,
    LoginComponent,
    AccessformComponent,
    EditFormComponent,
    DashboardCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent, DashboardFamiliesComponent]
})
export class AppModule { }
