import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffComponent } from './create-tariff/create-tariff.component';
import { ListTariffComponent } from './list-tariff/list-tariff.component';
import { TariffsService } from './services/tariffs.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoMobileService } from './services/auto-mobile.service';
import { ListCarsComponent } from './list-cars/list-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTariffComponent,
    TariffComponent,
    ListCarsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AutoMobileService,
    TariffsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
