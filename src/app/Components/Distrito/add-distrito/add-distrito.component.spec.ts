import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDistritoComponent } from './add-distrito.component';

describe('AddDistritoComponent', () => {
  let component: AddDistritoComponent;
  let fixture: ComponentFixture<AddDistritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDistritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDistritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
