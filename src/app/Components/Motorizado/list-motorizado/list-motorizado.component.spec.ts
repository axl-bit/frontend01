import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMotorizadoComponent } from './list-motorizado.component';

describe('ListMotorizadoComponent', () => {
  let component: ListMotorizadoComponent;
  let fixture: ComponentFixture<ListMotorizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMotorizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMotorizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
