import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertNumberTextComponent } from './convert-number-text.component';

describe('ConvertNumberTextComponent', () => {
  let component: ConvertNumberTextComponent;
  let fixture: ComponentFixture<ConvertNumberTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertNumberTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertNumberTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
