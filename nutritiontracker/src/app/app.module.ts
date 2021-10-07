import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule} from '@angular/material/form-field';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(faEnvelope, faLock);
  }
 }
