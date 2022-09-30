import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdenrecojoComponent } from './list-ordenrecojo.component';

describe('ListOrdenrecojoComponent', () => {
  let component: ListOrdenrecojoComponent;
  let fixture: ComponentFixture<ListOrdenrecojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdenrecojoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdenrecojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
