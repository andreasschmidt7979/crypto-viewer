import { ApiService } from './../../../service/api.service';
import { CurrencyService } from './../../../service/currency.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-coin-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  templateUrl: './coin-list.component.html',
  styleUrl: './coin-list.component.css',
})
export class CoinListComponent {
  selectedCurrency: string = 'EUR';
  bannerData: any = [];
  currency: string = 'EUR';
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'symbol',
    'current_price',
    'price_change_percentage_24h',
    'market_cap',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private api: ApiService,
    private router: Router,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.getAllData();
    this.getBannerData();
    this.currencyService.getCurrency().subscribe((val) => {
      this.currency = val;
      this.getAllData();
      this.getBannerData();
    });
  }
  sendCurrency($event: any) {
    console.log($event);
    this.currencyService.setCurrency($event);
  }

  getBannerData() {
    this.api.getTrendingCurrency(this.currency).subscribe((res) => {
      console.log(res);
      this.bannerData = res;
    });
  }

  getAllData() {
    this.api.getCurrency(this.currency).subscribe((res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotoDetails(row: any) {
    this.router.navigate(['pages/coin-detail', row.id]);
  }
}
