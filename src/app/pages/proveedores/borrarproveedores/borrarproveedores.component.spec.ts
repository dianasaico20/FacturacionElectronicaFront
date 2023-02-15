import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarproveedoresComponent } from './borrarproveedores.component';

describe('BorrarproveedoresComponent', () => {
  let component: BorrarproveedoresComponent;
  let fixture: ComponentFixture<BorrarproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarproveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrarproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

