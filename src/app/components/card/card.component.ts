import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  tipo: string = 'Teste';
  preco: number = 1000;

  plano = {
    infos: {
      tipo: 'outro exemplo'
    },
  };

  getFullPrice() {
    setTimeout(() => {
      console.log('Set Timeout');
      this.preco = 1234;
    }, 4000);

    return 'R$' + this.preco + ',00/Mês';
  }
}
