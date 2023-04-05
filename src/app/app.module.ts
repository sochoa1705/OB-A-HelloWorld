import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ListsModule } from './modules/lists/lists.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
//Import the HttpClientModule
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './components/forms/form/form.component';
import { FormNestedComponent } from './components/forms/form-nested/form-nested.component';
import { FormArrayComponent } from './components/forms/form-array/form-array.component';
import { FormValidComponent } from './components/forms/form-valid/form-valid.component';
//Import reactive forms module
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
//import matinput module
import {MatInputModule} from '@angular/material/input';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { pipe } from 'rxjs';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { AgeWizardPipe } from './pipes/age-wizard.pipe';
import { CalculatePointsPipe } from './pipes/calculate-points.pipe';
//import locale from '@angular/common/locales/en-GB';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-Ec';
//registerLocaleData(localeEs, 'es-ES');

@NgModule({
  declarations: [ 
    AppComponent,
    GreetingComponent,
    ContactListComponent,
    LoginFormComponent,
    FormComponent,
    FormNestedComponent,
    FormArrayComponent,
    FormValidComponent,
    PipesExampleComponent,
    MultiplyPipe,
    AgeWizardPipe,
    CalculatePointsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ListsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-GB'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
