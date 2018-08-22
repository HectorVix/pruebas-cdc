import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';



import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule ,
    //MDBBootstrapModule.forRoot(),
   
    BrowserAnimationsModule,
    MatFormFieldModule,MatSelectModule
    

    
    

    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
