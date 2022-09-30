import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdenentregaComponent } from './list-ordenentrega.component';

describe('ListOrdenentregaComponent', () => {
  let component: ListOrdenentregaComponent;
  let fixture: ComponentFixture<ListOrdenentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdenentregaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdenentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
