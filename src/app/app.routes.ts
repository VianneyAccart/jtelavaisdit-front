import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

export enum ROUTES_PATH {
  HOME = '/',
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
  ACCOUNT_INFORMATION = '/account/information',
  ACCOUNT_SECURITY = '/account/security',
  ACCOUNT_DASHBOARD = '/account/dashboard',
  ACCOUNT_STATEMENTS = '/account/statements',
  ACCOUNT_STATEMENTS_ARCHIVED = '/account/statements/archived',
}

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
];
