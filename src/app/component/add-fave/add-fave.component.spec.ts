import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaveComponent } from './add-fave.component';

describe('AddFaveComponent', () => {
  let component: AddFaveComponent;
  let fixture: ComponentFixture<AddFaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
