import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMotorizadoComponent } from './edit-motorizado.component';

describe('EditMotorizadoComponent', () => {
  let component: EditMotorizadoComponent;
  let fixture: ComponentFixture<EditMotorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMotorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMotorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
