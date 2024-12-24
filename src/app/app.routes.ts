import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { StatementsComponent } from './pages/statements/statements.component';
import { ArchivedStatementsComponent } from './pages/archived-statements/archived-statements.component';
import { SecurityComponent } from './pages/security/security.component';
import { AccountComponent } from './pages/account/account.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

export enum ROUTES_PATH {
  HOME = '/',
  LOGIN = 'auth/login',
  REGISTER = 'auth/register',
  ACCOUNT_INFORMATION = 'account/information',
  ACCOUNT_SECURITY = 'account/security',
  ACCOUNT_DASHBOARD = 'account/dashboard',
  ACCOUNT_STATEMENTS = 'account/statements',
  ACCOUNT_STATEMENTS_ARCHIVED = 'account/statements/archived',
}

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: ROUTES_PATH.ACCOUNT_DASHBOARD,
    component: DashbordComponent,
  },
  {
    path: ROUTES_PATH.ACCOUNT_STATEMENTS,
    component: StatementsComponent,
  },
  {
    path: ROUTES_PATH.ACCOUNT_STATEMENTS_ARCHIVED,
    component: ArchivedStatementsComponent,
  },
  {
    path: ROUTES_PATH.ACCOUNT_SECURITY,
    component: SecurityComponent,
  },
  {
    path: ROUTES_PATH.ACCOUNT_INFORMATION,
    component: AccountComponent,
  },
  {
    path: ROUTES_PATH.REGISTER,
    component: RegisterComponent,
  },
  {
    path: ROUTES_PATH.LOGIN,
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
