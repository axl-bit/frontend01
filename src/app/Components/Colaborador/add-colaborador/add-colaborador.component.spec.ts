import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColaboradorComponent } from './add-colaborador.component';

describe('AddColaboradorComponent', () => {
  let component: AddColaboradorComponent;
  let fixture: ComponentFixture<AddColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddColaboradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
