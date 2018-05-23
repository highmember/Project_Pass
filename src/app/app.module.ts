import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule, Component, Output, EventEmitter, ViewChild, ElementRef, Input} from '@angular/core';
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
// import { NgxStepperModule } from 'ngx-stepper';
import { MatNativeDateModule } from '@angular/material';
import { SaleDialogComponent } from './sale/sale-dialog.component';
import { PmcontrolComponent } from './pmcontrol/pmcontrol.component';
import { PmmatDialogComponent } from './pmcontrol/pmcontrol-dialog.component';

import { Plan4Component } from './plan4/plan4.component';
import { StorematComponent } from './storemat/storemat.component';

import { StorematDialogComponent } from './store/store-dialog.component';


import { ChoosePmComponent } from './choose-pm/choose-pm.component';

import {reportdiComponent} from './pmcontrol/edit-draft/reportdi'

import {MatStepperModule} from '@angular/material/stepper';

import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { StepsaleComponent } from './stepsale/stepsale.component';
import { Sale2Component } from './sale2/sale2.component';
import { SaleViewComponent } from './sale-view/sale-view.component';
import { StoreComponent } from './store/store.component';
import { ManagerComponent } from './manager/manager.component';
import {MatFormFieldModule} from '@angular/material';
import {DialogDataExampleDialog} from './storemat/storemat.component';
import {DialogStock} from './storemat/storemat.component';
import {choose} from './plan4/plan4.component';
import {Plus} from './plan4/plan4.component';
import {TableSelectionExample} from './plan4/pick.component';
import { EditDraftComponent } from './pmcontrol/edit-draft/edit-draft.component';

enableProdMode();
@NgModule({
  imports: [
    MatAutocompleteModule,
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
    MatNativeDateModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
    MatGridListModule,
    MatStepperModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,

    MatSortModule, HttpModule,
    HttpClientModule,

    MatSortModule,HttpModule,
    HttpClientModule,
    MatTabsModule
  ],
  declarations: [
    AppComponent,
    SaleComponent,
    SaleDialogComponent,
    PmcontrolComponent,
    PmmatDialogComponent,
    StepsaleComponent,
    Sale2Component,
    SaleViewComponent,
    StoreComponent,
    StorematDialogComponent,
    ManagerComponent,
    StorematComponent,
    Plan4Component,
    AppComponent,
    StoreComponent,
    Plan4Component,
    DialogDataExampleDialog,
    choose,
    Plus,
    TableSelectionExample,
    StorematComponent,
    DialogStock,
    ChoosePmComponent,
    EditDraftComponent,
    reportdiComponent
  ],
  entryComponents: [
    SaleDialogComponent,
    PmmatDialogComponent,
    StorematDialogComponent,
    DialogDataExampleDialog,
    choose,
    Plus,
    TableSelectionExample,
    DialogStock,
    ChoosePmComponent
    reportdiComponent
  ],
  providers: [MatDatepickerModule ],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
