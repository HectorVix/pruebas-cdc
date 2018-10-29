import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent ,DialogOverviewExampleDialog } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { faExternalLinkAlt, faPlus, faTimes, faDownload } from '@fortawesome/fontawesome-free-solid';
import * as fontawesome from '@fortawesome/fontawesome';
fontawesome.library.add(faExternalLinkAlt, faPlus, faTimes, faDownload);
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule ,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ModalGalleryModule.forRoot() ,FormsModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  entryComponents: [AppComponent, DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
