import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { NbThemeModule, NbLayoutModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideCharts(withDefaultRegisterables()),
    importProvidersFrom(NbThemeModule.forRoot({ name: 'default' })),
    importProvidersFrom(NbMenuModule.forRoot()),
  ],
};
