import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDonationComponent } from './form-donation.component';

describe('FormDonationComponent', () => {
  let component: FormDonationComponent;
  let fixture: ComponentFixture<FormDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
