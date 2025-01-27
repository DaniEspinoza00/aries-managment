import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDataTableComponent } from './sale-data-table.component';

describe('SaleDataTableComponent', () => {
  let component: SaleDataTableComponent;
  let fixture: ComponentFixture<SaleDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleDataTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
