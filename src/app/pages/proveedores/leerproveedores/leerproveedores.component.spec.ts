import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerproveedoresComponent } from './leerproveedores.component';

describe('LeerproveedoresComponent', () => {
  let component: LeerproveedoresComponent;
  let fixture: ComponentFixture<LeerproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerproveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeerproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

