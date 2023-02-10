import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpersonasComponent } from './formpersonas.component';

describe('FormpersonasComponent', () => {
  let component: FormpersonasComponent;
  let fixture: ComponentFixture<FormpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
