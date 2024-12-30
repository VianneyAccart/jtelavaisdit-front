import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNgcCookieConsent } from 'ngx-cookieconsent';
import { cookieConfig } from './cookies.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNgcCookieConsent(cookieConfig),
  ],
};
