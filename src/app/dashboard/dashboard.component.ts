import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
// import {NgReactDirective} from '../../app/react/ng-react.directive';

// import {ReactComponentDirective} from '../../app/react/ng-react.directive';

@Component({
  selector: 'app-dashboard',
  imports: [StatsWidget, 
    RecentSalesWidget, 
    BestSellingWidget, 
    RevenueStreamWidget, 
    NotificationsWidget,
    RouterLink,
    // NgReactDirective
    // ReactComponentDirective,
  ],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class Dashboard {
  path = '../react/hello-react-world.tsx';
}
