import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcollaborationsComponent } from './allcollaborations.component';

describe('AllcollaborationsComponent', () => {
  let component: AllcollaborationsComponent;
  let fixture: ComponentFixture<AllcollaborationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcollaborationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllcollaborationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
