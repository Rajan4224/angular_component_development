import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appscomponent } from './apps/apps.component';
import { DataComponent } from './data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    appscomponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
