import { Component } from '@angular/core';

interface PlanoInterface {
  infos: InfosInterface;
}

interface InfosInterface {
  tipo: string;
  preco: number;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  plano: PlanoInterface = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    },
  };
}
