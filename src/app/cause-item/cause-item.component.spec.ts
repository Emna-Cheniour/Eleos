import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseItemComponent } from './cause-item.component';

describe('CauseItemComponent', () => {
  let component: CauseItemComponent;
  let fixture: ComponentFixture<CauseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CauseItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
