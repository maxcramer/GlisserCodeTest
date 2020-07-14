import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameComponent } from './components/user-name/user-name.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UsernameInputComponent } from './components/username-input/username-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    UserInfoComponent,
    UsernameInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
