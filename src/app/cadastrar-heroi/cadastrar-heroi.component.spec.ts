import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarHeroiComponent } from './cadastrar-heroi.component';

describe('CadastrarHeroiComponent', () => {
  let component: CadastrarHeroiComponent;
  let fixture: ComponentFixture<CadastrarHeroiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarHeroiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarHeroiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
