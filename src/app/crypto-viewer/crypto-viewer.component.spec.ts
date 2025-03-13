import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoViewerComponent } from './crypto-viewer.component';

describe('CryptoViewerComponent', () => {
  let component: CryptoViewerComponent;
  let fixture: ComponentFixture<CryptoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptoViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
