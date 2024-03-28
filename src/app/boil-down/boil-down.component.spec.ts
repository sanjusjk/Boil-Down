import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoilDownComponent } from './boil-down.component';

describe('BoilDownComponent', () => {
  let component: BoilDownComponent;
  let fixture: ComponentFixture<BoilDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoilDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoilDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
