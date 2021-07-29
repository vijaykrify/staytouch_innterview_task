import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemeetComponent } from './createmeet.component';

describe('CreatemeetComponent', () => {
  let component: CreatemeetComponent;
  let fixture: ComponentFixture<CreatemeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatemeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
