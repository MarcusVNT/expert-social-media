import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wpp } from './wpp';

describe('Wpp', () => {
  let component: Wpp;
  let fixture: ComponentFixture<Wpp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wpp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wpp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
