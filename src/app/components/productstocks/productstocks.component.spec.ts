import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstocksComponent } from './productstocks.component';

describe('ProductstocksComponent', () => {
  let component: ProductstocksComponent;
  let fixture: ComponentFixture<ProductstocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductstocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
