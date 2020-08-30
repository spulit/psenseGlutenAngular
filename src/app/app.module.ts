import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ServicioComponent } from './servicio/servicio.component';
import { BakeryComponent } from './bakery/bakery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { PriceComponent } from './price/price.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [AppComponent, DescriptionComponent, ServicioComponent, BakeryComponent, CarouselComponent, CakeComponent, PriceComponent, ReviewComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}