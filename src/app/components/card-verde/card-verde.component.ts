import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-verde',
  templateUrl: './card-verde.component.html',
  styleUrls: ['./card-verde.component.scss'],
})
export class CardVerdeComponent {
  @Input() planType: string = 'Intermediário';
  @Input({ required: true}) planPrice: number = 0;
}
