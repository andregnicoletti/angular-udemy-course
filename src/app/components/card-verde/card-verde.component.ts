import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-verde',
  templateUrl: './card-verde.component.html',
  styleUrls: ['./card-verde.component.scss'],
})
export class CardVerdeComponent {
  private _planText: string = '';

  @Input()
  set planType(value: string) {
    this._planText = value.toUpperCase();
  }

  get planType(): string {
    return this._planText;
  }

  @Input({ required: true })
  planPrice: number = 0;

  buttonClicked(valueEmmited: boolean) {
    console.log('componente pai: ' + valueEmmited);
  }
}
