import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { BodyComponent } from './components/layouts/body/body.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { MyformsComponent } from './components/myforms/myforms.component';
import { MyapiComponent } from './components/myapi/myapi.component';
import { MycontactComponent } from './components/mycontact/mycontact.component';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MyformsComponent,
    MyapiComponent,
    MycontactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
