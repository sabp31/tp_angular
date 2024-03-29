import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TppoeHomeComponent } from './tppoe-home.component';

describe('TppoeHomeComponent', () => {
  let component: TppoeHomeComponent;
  let fixture: ComponentFixture<TppoeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TppoeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TppoeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
