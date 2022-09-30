import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrdenrecojoComponent } from './edit-ordenrecojo.component';

describe('EditOrdenrecojoComponent', () => {
  let component: EditOrdenrecojoComponent;
  let fixture: ComponentFixture<EditOrdenrecojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrdenrecojoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrdenrecojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
