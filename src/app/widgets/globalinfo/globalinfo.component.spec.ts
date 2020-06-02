import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalinfoComponent } from './globalinfo.component';

describe('GlobalinfoComponent', () => {
  let component: GlobalinfoComponent;
  let fixture: ComponentFixture<GlobalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
