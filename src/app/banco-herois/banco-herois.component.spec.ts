import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoHeroisComponent } from './banco-herois.component';

describe('BancoHeroisComponent', () => {
  let component: BancoHeroisComponent;
  let fixture: ComponentFixture<BancoHeroisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BancoHeroisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancoHeroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
