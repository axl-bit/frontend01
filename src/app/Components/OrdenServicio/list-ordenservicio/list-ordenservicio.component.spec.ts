import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdenservicioComponent } from './list-ordenservicio.component';

describe('ListOrdenservicioComponent', () => {
  let component: ListOrdenservicioComponent;
  let fixture: ComponentFixture<ListOrdenservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdenservicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdenservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
