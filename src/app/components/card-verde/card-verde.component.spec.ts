import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVerdeComponent } from './card-verde.component';

describe('CardVerdeComponent', () => {
  let component: CardVerdeComponent;
  let fixture: ComponentFixture<CardVerdeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardVerdeComponent]
    });
    fixture = TestBed.createComponent(CardVerdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
