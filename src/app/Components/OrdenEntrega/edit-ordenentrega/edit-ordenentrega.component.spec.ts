import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdenentregaComponent } from './edit-ordenentrega.component';

describe('EditOrdenentregaComponent', () => {
  let component: EditOrdenentregaComponent;
  let fixture: ComponentFixture<EditOrdenentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrdenentregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrdenentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
