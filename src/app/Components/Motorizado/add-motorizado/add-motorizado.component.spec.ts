import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMotorizadoComponent } from './add-motorizado.component';

describe('AddMotorizadoComponent', () => {
  let component: AddMotorizadoComponent;
  let fixture: ComponentFixture<AddMotorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMotorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMotorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
