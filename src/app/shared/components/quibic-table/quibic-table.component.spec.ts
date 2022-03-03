import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuibicTableComponent } from './quibic-table.component';

describe('QuibicTableComponent', () => {
  let component: QuibicTableComponent;
  let fixture: ComponentFixture<QuibicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuibicTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuibicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
