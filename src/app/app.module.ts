import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataTableModule } from "ng2-data-table";


import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent
  ],
  imports: [
    BrowserModule ,
    MDBBootstrapModule.forRoot(),
    DataTableModule 
    

    
    

    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
