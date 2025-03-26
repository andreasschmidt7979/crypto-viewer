import { Routes } from '@angular/router';
/*import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';*/
import { Dashboard } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/component/layout/layout.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: Dashboard },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'pages', loadChildren: () => import('./pages/pages.routes') }
    ]
  }
  /*{ path: 'coin-list', component: CoinListComponent },
  { path: 'coin-detail/:id', component: CoinDetailComponent },*/
];
