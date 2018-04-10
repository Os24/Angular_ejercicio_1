import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import {FormsModule} from '@angular/forms';
import { VerdurasComponent } from './verduras/verduras.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    VerdurasComponent

  ],
  imports: [
   BrowserModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
