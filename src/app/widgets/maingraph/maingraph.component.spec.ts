import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaingraphComponent } from './maingraph.component';

describe('MaingraphComponent', () => {
  let component: MaingraphComponent;
  let fixture: ComponentFixture<MaingraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaingraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaingraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
