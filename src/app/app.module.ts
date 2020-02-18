import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllpostsComponent } from './allposts/allposts.component';
import {HttpClientModule} from '@angular/common/http';
import { ThreadComponent } from './thread/thread.component';
import { ManageComponent } from './manage/manage.component'
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginsignupComponent,
    AllpostsComponent,
    ThreadComponent,
    ManageComponent,
    NavbarComponent,
    WelcomeComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
