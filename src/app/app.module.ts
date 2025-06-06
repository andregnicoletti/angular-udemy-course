import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardsModule } from './modules/cards/cards.module';
import { CardButtonCancelComponent } from './components/card-button-cancel/card-button-cancel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardVerdeComponent } from './components/card-verde/card-verde.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CardsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
