import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';

@Component({
  selector: 'app-dashboard',
  imports: [
    // StatsWidget,
    // RecentSalesWidget,
    // BestSellingWidget,
    // RevenueStreamWidget,
    // NotificationsWidget,
  ],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class Dashboard {}
