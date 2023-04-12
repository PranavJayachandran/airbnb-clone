import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AreasComponent } from './areas/areas.component';
import { AreaComponent } from './area/area.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroStarSolid,
  heroHeartSolid,
  heroUserSolid,
} from '@ng-icons/heroicons/solid';
import {
  heroShare,
  heroHeart,
  heroPhoto,
  heroWifi,
  heroChevronLeft,
  heroBars4,
  heroGlobeAlt,
} from '@ng-icons/heroicons/outline';
import { RoomsComponent } from './rooms/rooms.component';
import { OfferingComponent } from './offering/offering.component';
import { CalenderComponent } from './calender/calender.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { PayoutComponent } from './payout/payout.component';
import { HttpClientModule } from '@angular/common/http';
import { PlacingRequestComponent } from './placing-request/placing-request.component';
import { FinalPriceDisplayComponent } from './final-price-display/final-price-display.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AreasComponent,
    AreaComponent,
    RoomsComponent,
    OfferingComponent,
    CalenderComponent,
    PayoutComponent,
    PlacingRequestComponent,
    FinalPriceDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroStarSolid,
      heroHeartSolid,
      heroShare,
      heroHeart,
      heroPhoto,
      heroWifi,
      heroChevronLeft,
      heroBars4,
      heroUserSolid,
      heroGlobeAlt,
    }),
    CalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserAnimationsModule,
    MatNativeDateModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
