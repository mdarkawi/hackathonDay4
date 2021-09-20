import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { AccountComponent } from './user/account/account.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AccountService} from "./user/services/account.service";
import {HttpClientModule} from "@angular/common/http";
import { ArticlesComponent } from './articles/articles.component';
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AccountComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbNavModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
