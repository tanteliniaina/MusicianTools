import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailssongsComponent } from './detailssongs.component';

describe('DetailssongsComponent', () => {
  let component: DetailssongsComponent;
  let fixture: ComponentFixture<DetailssongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailssongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailssongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
