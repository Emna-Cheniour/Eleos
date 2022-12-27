import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarStartComponent } from './top-bar-start.component';

describe('TopBarStartComponent', () => {
  let component: TopBarStartComponent;
  let fixture: ComponentFixture<TopBarStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
