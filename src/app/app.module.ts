import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffComponent } from './create-tariff/tariff.component';
import { ListTariffComponent } from './list/list.component';
import { TariffsService } from './services/tariffs.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoMobileService } from './services/auto-mobile.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTariffComponent,
    TariffComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AutoMobileService,
    TariffsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
