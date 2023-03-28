import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ListsModule } from './modules/lists/lists.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
//Import the HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
@NgModule({
  declarations: [ 
    AppComponent,
    GreetingComponent,
    ContactListComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
