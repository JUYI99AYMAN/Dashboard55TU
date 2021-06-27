import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilControllerComponent } from './accueil-controller.component';

describe('AccueilControllerComponent', () => {
  let component: AccueilControllerComponent;
  let fixture: ComponentFixture<AccueilControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
