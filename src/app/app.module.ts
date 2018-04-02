import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule,Component, Output, EventEmitter, ViewChild, ElementRef, Input} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SaleComponent } from './sale/sale.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import 'hammerjs';
import { enableProdMode } from '@angular/core';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSliderModule,

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
