import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedStatementsComponent } from './archived-statements.component';

describe('ArchivedStatementsComponent', () => {
  let component: ArchivedStatementsComponent;
  let fixture: ComponentFixture<ArchivedStatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedStatementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
