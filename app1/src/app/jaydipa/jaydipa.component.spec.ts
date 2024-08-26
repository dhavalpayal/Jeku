import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaydipaComponent } from './jaydipa.component';

describe('JaydipaComponent', () => {
  let component: JaydipaComponent;
  let fixture: ComponentFixture<JaydipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaydipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaydipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
