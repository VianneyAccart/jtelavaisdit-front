import { NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { ROUTES_PATH } from './app.routes';

export const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'jtelavaisdit.fr',
  },
  palette: {
    popup: {
      background: '#512DBE',
      text: '#ffffff',
      link: '#ffffff',
    },
    button: {
      background: 'transparent',
      text: '#ffffff',
      border: '#ffffff',
    },
  },
  theme: 'classic',
  position: 'bottom-right',
  revokable: false,
  type: 'info',
  content: {
    message:
      "Nous n'utilisons que des cookies nécessaires pour assurer le bon fonctionnement de notre site et garantir une navigation sécurisée. Votre consentement n'est pas requis pour ces cookies.",
    dismiss: "C'est noté !",
    link: 'Politique de confidentialité',
    href: ROUTES_PATH.PRIVACY,
  },
};
