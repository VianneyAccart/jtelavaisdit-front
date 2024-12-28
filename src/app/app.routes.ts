import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { StatementsComponent } from './pages/statements/statements.component';
import { ArchivedStatementsComponent } from './pages/archived-statements/archived-statements.component';
import { SecurityComponent } from './pages/security/security.component';
import { AccountComponent } from './pages/account/account.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalsComponent } from './pages/legals/legals.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export enum ROUTES_PATH {
  HOME = '/',
  LOGIN = 'auth/connexion',
  REGISTER = 'auth/enregistrement',
  ACCOUNT_INFORMATION = 'compte/informations',
  ACCOUNT_SECURITY = 'compte/securite',
  ACCOUNT_DASHBOARD = 'compte/tableau-de-bord',
  ACCOUNT_STATEMENTS = 'compte/affirmations',
  ACCOUNT_STATEMENTS_ARCHIVED = 'compte/affirmations/archives',
  CONTACT = 'contact',
  LEGALS = 'mentions-legales',
  PRIVACY = 'politique-de-confidentialite',
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
    path: ROUTES_PATH.CONTACT,
    component: ContactComponent,
  },
  {
    path: ROUTES_PATH.LEGALS,
    component: LegalsComponent,
  },
  {
    path: ROUTES_PATH.PRIVACY,
    component: PrivacyComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
