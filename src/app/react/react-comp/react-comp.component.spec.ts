import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactCompComponent } from './react-comp.component';

describe('ReactCompComponent', () => {
  let component: ReactCompComponent;
  let fixture: ComponentFixture<ReactCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
