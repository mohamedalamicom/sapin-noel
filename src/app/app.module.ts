import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginGuard } from './_guards/LoginGuard';
import { LoginService } from './_services/loginService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
