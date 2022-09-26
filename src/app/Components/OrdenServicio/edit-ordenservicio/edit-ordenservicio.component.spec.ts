import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdenservicioComponent } from './edit-ordenservicio.component';

describe('EditOrdenservicioComponent', () => {
  let component: EditOrdenservicioComponent;
  let fixture: ComponentFixture<EditOrdenservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrdenservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrdenservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
