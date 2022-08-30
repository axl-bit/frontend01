import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTarifaComponent } from './add-tarifa.component';

describe('AddTarifaComponent', () => {
  let component: AddTarifaComponent;
  let fixture: ComponentFixture<AddTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTarifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
