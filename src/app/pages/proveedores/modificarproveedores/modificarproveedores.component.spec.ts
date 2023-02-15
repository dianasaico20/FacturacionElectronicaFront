///// EspinozaChevezAlfonso
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificarproveedoresComponent } from './modificarproveedores.component';

describe('ModificarproveedoresComponent', () => {
  let component: ModificarproveedoresComponent;
  let fixture: ComponentFixture<ModificarproveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarproveedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarproveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

