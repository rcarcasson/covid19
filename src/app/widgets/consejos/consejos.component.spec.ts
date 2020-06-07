import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejosComponent } from './consejos.component';

describe('ConsejosComponent', () => {
  let component: ConsejosComponent;
  let fixture: ComponentFixture<ConsejosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsejosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
