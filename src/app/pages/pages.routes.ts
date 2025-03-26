import { Routes } from '@angular/router';
import { DocumentationComponent } from './documentation/documentation.component';
import { CryptoViewerComponent } from './crypto-viewer/crypto-viewer.component';
import { EmptyComponent } from './empty/empty.component';

export default [
    { path: 'documentation', component: DocumentationComponent },
    { path: 'crypto-viewer', component: CryptoViewerComponent },
    { path: 'empty', component: EmptyComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;