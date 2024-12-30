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
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';
import { NotAuthenticatedGuard } from './shared/guards/not-authenticated.guard';

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
  PRIVACY = 'confidentialite',
}

const TITLE_PREFIX = 'Jtelavaisdit - ';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: TITLE_PREFIX + 'Créez, révélez et célébrez !',
  },
  {
    path: ROUTES_PATH.ACCOUNT_DASHBOARD,
    component: DashbordComponent,
    canActivate: [AuthenticatedGuard],
    title: TITLE_PREFIX + 'Tableau de bord',
  },
  {
    path: ROUTES_PATH.ACCOUNT_STATEMENTS,
    component: StatementsComponent,
    canActivate: [AuthenticatedGuard],
    title: TITLE_PREFIX + 'Affirmations',
  },
  {
    path: ROUTES_PATH.ACCOUNT_STATEMENTS_ARCHIVED,
    component: ArchivedStatementsComponent,
    canActivate: [AuthenticatedGuard],
    title: TITLE_PREFIX + 'Affirmations archivées',
  },
  {
    path: ROUTES_PATH.ACCOUNT_SECURITY,
    component: SecurityComponent,
    canActivate: [AuthenticatedGuard],
    title: TITLE_PREFIX + 'Sécurité du compte',
  },
  {
    path: ROUTES_PATH.ACCOUNT_INFORMATION,
    component: AccountComponent,
    canActivate: [AuthenticatedGuard],
    title: TITLE_PREFIX + 'Informations du compte',
  },
  {
    path: ROUTES_PATH.REGISTER,
    component: RegisterComponent,
    canActivate: [NotAuthenticatedGuard],
    title: TITLE_PREFIX + "S'enregistrer",
  },
  {
    path: ROUTES_PATH.LOGIN,
    component: LoginComponent,
    canActivate: [NotAuthenticatedGuard],
    title: TITLE_PREFIX + 'Se connecter',
  },
  {
    path: ROUTES_PATH.CONTACT,
    component: ContactComponent,
    title: TITLE_PREFIX + 'Contact',
  },
  {
    path: ROUTES_PATH.LEGALS,
    component: LegalsComponent,
    title: TITLE_PREFIX + 'Mentions légales',
  },
  {
    path: ROUTES_PATH.PRIVACY,
    component: PrivacyComponent,
    title: TITLE_PREFIX + 'Politique de confidentialité',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
