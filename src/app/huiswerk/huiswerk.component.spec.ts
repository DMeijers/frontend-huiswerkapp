import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuiswerkComponent } from './huiswerk.component';

describe('HuiswerkComponent', () => {
  let component: HuiswerkComponent;
  let fixture: ComponentFixture<HuiswerkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuiswerkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuiswerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
