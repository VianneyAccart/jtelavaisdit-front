import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcuComponent } from './gcu.component';

describe('GcuComponent', () => {
  let component: GcuComponent;
  let fixture: ComponentFixture<GcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GcuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
