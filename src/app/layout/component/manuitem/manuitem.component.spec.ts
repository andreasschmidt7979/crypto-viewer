import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuitemComponent } from './manuitem.component';

describe('ManuitemComponent', () => {
  let component: ManuitemComponent;
  let fixture: ComponentFixture<ManuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManuitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
