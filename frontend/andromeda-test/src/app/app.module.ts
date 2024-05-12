import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StyleClassModule } from 'primeng/styleclass';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AndromedaToolsComponent } from './tools/andromeda-tools.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CheckboxModule,
    ChartModule,
  ],
  providers: [StyleClassModule, AndromedaToolsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
