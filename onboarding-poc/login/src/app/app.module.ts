import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TableComponent } from './user-details/table/table.component';
import { UserInputComponent } from './user-details/user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UserDetailsComponent,
    TableComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
