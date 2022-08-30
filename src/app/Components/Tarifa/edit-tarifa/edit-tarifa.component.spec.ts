import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarifaComponent } from './edit-tarifa.component';

describe('EditTarifaComponent', () => {
  let component: EditTarifaComponent;
  let fixture: ComponentFixture<EditTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTarifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
