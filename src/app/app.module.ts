import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardRoxoComponent } from './components/card-roxo/card-roxo.component';
import { CardButtonComponent } from './components/card-button/card-button.component';
import { CardRoxoButtonComponent } from './components/card-roxo-button/card-roxo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
