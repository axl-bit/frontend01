import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdenservicioautomatizadoComponent } from './add-ordenservicioautomatizado.component';

describe('AddOrdenservicioautomatizadoComponent', () => {
  let component: AddOrdenservicioautomatizadoComponent;
  let fixture: ComponentFixture<AddOrdenservicioautomatizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdenservicioautomatizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrdenservicioautomatizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
