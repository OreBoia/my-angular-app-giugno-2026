import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListSignalComponent } from './item-list-signal-component';

describe('ItemListSignalComponent', () => {
  let component: ItemListSignalComponent;
  let fixture: ComponentFixture<ItemListSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemListSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemListSignalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
