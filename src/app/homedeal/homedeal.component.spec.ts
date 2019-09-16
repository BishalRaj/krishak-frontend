import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedealComponent } from './homedeal.component';

describe('HomedealComponent', () => {
  let component: HomedealComponent;
  let fixture: ComponentFixture<HomedealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
