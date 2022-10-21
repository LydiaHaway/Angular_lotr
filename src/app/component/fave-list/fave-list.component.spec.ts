import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaveListComponent } from './fave-list.component';

describe('FaveListComponent', () => {
  let component: FaveListComponent;
  let fixture: ComponentFixture<FaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
