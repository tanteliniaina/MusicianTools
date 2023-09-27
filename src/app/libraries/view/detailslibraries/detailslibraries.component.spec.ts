import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailslibrariesComponent } from './detailslibraries.component';

describe('DetailslibrariesComponent', () => {
  let component: DetailslibrariesComponent;
  let fixture: ComponentFixture<DetailslibrariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailslibrariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailslibrariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
