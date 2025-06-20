import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss'],
})
export class CardButtonComponent {
  @Output() buttonClickEmmitter = new EventEmitter<boolean>();

  onButtonClick() {
    console.log('botao foi clicado');
    this.buttonClickEmmitter.emit(true);
  }
}
