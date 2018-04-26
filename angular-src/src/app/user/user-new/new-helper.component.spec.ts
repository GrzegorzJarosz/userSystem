import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHelperComponent } from './new-helper.component';

describe('NewHelperComponent', () => {
  let component: NewHelperComponent;
  let fixture: ComponentFixture<NewHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
