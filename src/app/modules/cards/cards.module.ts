import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from 'src/app/components/card/card.component';
import { CardRoxoComponent } from 'src/app/components/card-roxo/card-roxo.component';
import { CardButtonComponent } from 'src/app/components/card-button/card-button.component';
import { CardRoxoButtonComponent } from 'src/app/components/card-roxo-button/card-roxo-button.component';
import { CardButtonCancelComponent } from 'src/app/components/card-button-cancel/card-button-cancel.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ],
  imports: [CommonModule],
  exports: [CardComponent, CardRoxoComponent],
})
export class CardsModule {}
