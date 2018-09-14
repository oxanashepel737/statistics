import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsModalComponent } from './props-modal.component';

describe('PropsModalComponent', () => {
  let component: PropsModalComponent;
  let fixture: ComponentFixture<PropsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
