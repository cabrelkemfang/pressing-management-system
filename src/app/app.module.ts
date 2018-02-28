import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatStepperModule
} from '@angular/material';
import { ReceptionistComponent } from './user/receptionist/receptionist.component';
import { LoginComponent } from './login/login.component';

import { ClientComponent } from './user/client/client.component';

import { RegistrationComponent } from './user/registration/registration.component';
import { PersonalInformationComponent } from './user/personal-information/personal-information.component';
import { CleanningMaterialComponent } from './user/cleanning-material/cleanning-material.component';
import { UpdateComponent } from './user/update/update.component';
import{ServicesService} from './services.service';
import {HttpModule} from '@angular/http';
import { DelclientComponent } from './delete/delclient/delclient.component';

import { MaterialUpdateComponent } from './update/material-update/material-update.component';
import { RegisterUpdateComponent } from './update/register-update/register-update.component';

import { DeleteregistrationComponent } from './delete/deleteregistration/deleteregistration.component';
import { DeletematerialComponent } from './delete/deletematerial/deletematerial.component';
import { NewReceptionistComponent } from './new-receptionist/new-receptionist.component';
import { UpdateReceptionistComponent } from './update/update-receptionist/update-receptionist.component';
import { DeleteReceptionistComponent } from './delete/delete-receptionist/delete-receptionist.component';
const route: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'receptioninst', component: ReceptionistComponent ,children:[
    { path: '', redirectTo: 'client', pathMatch: 'full' },
    { path: 'client', component: ClientComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'personalInfomation', component: PersonalInformationComponent },
    { path: 'cleanningMaterial', component: CleanningMaterialComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'print', component: DelclientComponent },
    { path: 'updateR', component: RegisterUpdateComponent },
    { path: 'updateM', component: MaterialUpdateComponent },
    { path: 'printR', component: DeleteregistrationComponent },
    { path: 'printM', component: DeletematerialComponent },
    { path: 'newReceptionist', component: NewReceptionistComponent },
    { path: 'updateR', component: UpdateReceptionistComponent },
    { path: 'printNr', component: DeleteReceptionistComponent },
  ]},
  

];

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistComponent,
    LoginComponent,
    
    ClientComponent,
    RegistrationComponent,
    RegistrationComponent,
    PersonalInformationComponent,
    CleanningMaterialComponent,
    UpdateComponent,
  
    DelclientComponent,
    
    MaterialUpdateComponent,
    RegisterUpdateComponent,
   
    DeleteregistrationComponent,
   
    DeletematerialComponent,
   
    NewReceptionistComponent,
   
    UpdateReceptionistComponent,
   
    DeleteReceptionistComponent,
    
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(route),
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
