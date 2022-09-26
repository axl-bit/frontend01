import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdenservicioComponent } from './add-ordenservicio.component';

describe('AddOrdenservicioComponent', () => {
  let component: AddOrdenservicioComponent;
  let fixture: ComponentFixture<AddOrdenservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdenservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrdenservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
