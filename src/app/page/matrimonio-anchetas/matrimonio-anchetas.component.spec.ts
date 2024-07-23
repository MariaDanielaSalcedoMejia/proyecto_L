import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrimonioAnchetasComponent } from './matrimonio-anchetas.component';

describe('MatrimonioAnchetasComponent', () => {
  let component: MatrimonioAnchetasComponent;
  let fixture: ComponentFixture<MatrimonioAnchetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrimonioAnchetasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrimonioAnchetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
