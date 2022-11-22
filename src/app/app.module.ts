import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

import { StatusService } from './status.service';
import { HttpClientModule } from '@angular/common/http';
import { TableStatusComponent } from './table-status/table-status.component';
import { DataViewStatusComponent } from './data-view-status/data-view-status.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    TableStatusComponent,
    DataViewStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    HttpClientModule,
    ButtonModule,
    TableModule


  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
