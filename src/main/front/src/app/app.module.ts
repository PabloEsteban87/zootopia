import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/views/login/login.component';
import { AccessFormComponent } from './user/components/accessform/accessform.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { TestdbComponent } from './testdb/testdb.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardFamiliesComponent } from './dashboard_families/dashboard-families/dashboard-families.component';
import { ListComponent } from './animals/list/list.component';
import { CountAnimalsComponent } from './count_animals/count-animals/count-animals.component';


import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AccessFormComponent,
    AddFormComponent,
    TestdbComponent,
    DashboardFamiliesComponent,
    ListComponent,
    CountAnimalsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

