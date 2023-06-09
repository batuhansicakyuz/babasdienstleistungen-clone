import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirstSection } from './firstsection/firstsection.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { SecondSection } from './secondsection/secondsection.component';
import { ThirdSection } from './thirdsection/thirdsection.component';
import { HomeComponent } from './home/home.component';
import { FifthSection } from './fifthsection/fifthsection.component';

import { GoogleMapsModule } from '@angular/google-maps';

import { HeaderSection } from './headersection/headersection.component';
import { FirstComponent } from './first/first.component';

import { AppRoutingModule } from './app-routing.module';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSection,
    SecondSection,
    ThirdSection,
    HomeComponent,
    FifthSection,
    HeaderSection,
    FirstComponent,
    ProfileEditorComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule,
    GoogleMapsModule,
    AppRoutingModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
