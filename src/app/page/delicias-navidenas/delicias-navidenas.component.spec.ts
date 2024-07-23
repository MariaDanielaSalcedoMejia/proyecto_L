import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliciasNavidenasComponent } from './delicias-navidenas.component';

describe('DeliciasNavidenasComponent', () => {
  let component: DeliciasNavidenasComponent;
  let fixture: ComponentFixture<DeliciasNavidenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliciasNavidenasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliciasNavidenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
