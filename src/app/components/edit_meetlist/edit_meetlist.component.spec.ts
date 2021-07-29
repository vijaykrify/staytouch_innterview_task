import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmeetComponent } from './editmeet.component';

describe('EditmeetComponent', () => {
  let component: EditmeetComponent;
  let fixture: ComponentFixture<EditmeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
