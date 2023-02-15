import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearproveedoresComponent } from './crearproveedores.component';

describe('CrearproveedoresComponent', () => {
  let component: CrearproveedoresComponent;
  let fixture: ComponentFixture<CrearproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearproveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
