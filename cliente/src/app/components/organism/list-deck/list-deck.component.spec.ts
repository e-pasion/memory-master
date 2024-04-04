import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeckComponent } from './list-deck.component';

describe('ListDeckComponent', () => {
  let component: ListDeckComponent;
  let fixture: ComponentFixture<ListDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
