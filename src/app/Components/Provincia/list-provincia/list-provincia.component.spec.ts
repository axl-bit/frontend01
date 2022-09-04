import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProvinciaComponent } from './list-provincia.component';

describe('ListProvinciaComponent', () => {
  let component: ListProvinciaComponent;
  let fixture: ComponentFixture<ListProvinciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProvinciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProvinciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
