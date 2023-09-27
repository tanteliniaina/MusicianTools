import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllibrariesComponent } from './alllibraries.component';

describe('AlllibrariesComponent', () => {
  let component: AlllibrariesComponent;
  let fixture: ComponentFixture<AlllibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlllibrariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlllibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
