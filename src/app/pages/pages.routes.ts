import { Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { EmptyComponent } from './empty/empty.component';
import { CoinListComponent } from './crypto-viewer/components/coin-list/coin-list.component';
import { CoinDetailComponent } from './crypto-viewer/components/coin-detail/coin-detail.component';

export default [
  { path: 'coin-list', component: CoinListComponent },
  { path: 'coin-detail/:id', component: CoinDetailComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'empty', component: EmptyComponent },
  {
    path: 'app-react-comp',
    loadComponent: () =>
      import('../../app/react/react-comp/react-comp.component').then(
        (m) => m.ReactCompComponent
      ),
  },
  { path: '**', redirectTo: '/notfound' },
] as Routes;
