import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFalshMessagesComponent } from './product-falsh-messages.component';

describe('ProductFalshMessagesComponent', () => {
  let component: ProductFalshMessagesComponent;
  let fixture: ComponentFixture<ProductFalshMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFalshMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFalshMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
