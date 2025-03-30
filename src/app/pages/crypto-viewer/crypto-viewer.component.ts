import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-crypto-viewer',
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  templateUrl: './crypto-viewer.component.html',
  styleUrl: './crypto-viewer.component.scss',
})
export class CryptoViewerComponent {
  selectedCurrency: string = 'EUR';
  title = 'CodeSandbox';

  constructor(private currencyService: CurrencyService) {}

  sendCurrency($event: any) {
    console.log($event);
    this.currencyService.setCurrency($event);
  }
}
