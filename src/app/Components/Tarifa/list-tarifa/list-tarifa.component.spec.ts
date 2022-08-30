import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTarifaComponent } from './list-tarifa.component';

describe('ListTarifaComponent', () => {
  let component: ListTarifaComponent;
  let fixture: ComponentFixture<ListTarifaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTarifaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
