import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FritosComponent } from './fritos.component';

describe('FritosComponent', () => {
  let component: FritosComponent;
  let fixture: ComponentFixture<FritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
