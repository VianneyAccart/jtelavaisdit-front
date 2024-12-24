import { Component, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faPaperPlane,
  faClock,
  faFolder,
} from '@fortawesome/free-regular-svg-icons';
import {
  faChartLine,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { Router, RouterLink } from '@angular/router';
import { Question } from './models/question.type';
import { ROUTES_PATH } from '../../app.routes';

@Component({
  selector: 'app-homepage',
  imports: [CardComponent, FontAwesomeModule, IconCardComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  auth = inject(AuthService);
  #router = inject(Router);

  faCalendar = faCalendar;
  faPaperPlane = faPaperPlane;
  faClock = faClock;
  faFolder = faFolder;
  faChartLine = faChartLine;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  questions: Question[] = [
    {
      id: 1,
      title: 'Est-ce que jtelavaisdit est gratuit ?',
      content:
        "Oui, jtelavaisdit est entièrement gratuit. Pour pouvoir utiliser l'ensemble des fonctionnalités, vous devez d'abord vous enregistrer.",
      isOpen: true,
      link: ROUTES_PATH.REGISTER,
      linkDescription: "S'enregistrer gratuitement",
    },
    {
      id: 2,
      title: "Qu'est-ce qu'une affirmation ?",
      content:
        'Une affirmation est une déclaration ou une prédiction que vous pouvez créer. Elle est composée d’un titre unique et d’une description. Vous pouvez également définir une date de révélation automatique, associée à une liste de destinataires qui correspond à une liste d’adresses email.',
      isOpen: false,
    },
    {
      id: 3,
      title: 'Est-ce que je peux modifier une affirmation ?',
      content:
        "Oui, vous pouvez modifier une affirmation à tout moment tant qu'elle n'a pas encore été révélée. Toutefois, pour garantir l'authenticité de ce que vous avez écrit, vous ne pouvez modifier que la date de révélation (en ajouter une, la supprimer ou la modifier) et la liste de destinataires (ajouter ou supprimer des destinataires).",
      isOpen: false,
    },
    {
      id: 4,
      title:
        'Suis-je obligé.e de définir des destinataires pour une affirmation ?',
      content:
        "Non, vous pouvez créer des affirmations sans destinataires. Les affirmations sont conservées jusqu'à ce que vous les archiviez ou que vous décidiez d'ajouter des destinataires et de les révéler.",
      isOpen: false,
    },
    {
      id: 5,
      title: 'Combien de destinataires je peux ajouter à une affirmation ?',
      content:
        'Vous pouvez associer entre 0 et 10 destinataires au maximum à une affirmation.',
      isOpen: false,
    },
    {
      id: 6,
      title: 'Pourquoi je ne peux pas supprimer une affirmation ?',
      content:
        "Nous avons décidé de ne pas permettre la suppression d'une affirmation. Cela est inhérent au fonctionnement de jtelavaisdit, où le but est de garantir l'authenticité de ce que vous avez écrit et conserver la trace de vos affirmations. Il n'est toutefois pas impossible que la suppression devienne possible dans une future version, selon l'évolution de vos besoins.",
      isOpen: false,
      link: '/contact',
      linkDescription:
        "Dites-nous pourquoi nous devrions permettre la suppression d'une affirmation ?",
    },
    {
      id: 7,
      title: "Qu'est-ce qu'une révélation ?",
      content:
        'Une révélation correspond au moment où une affirmation est révélée à votre liste de destinataires. Une révélation peut avoir lieu de deux manières différentes : soit automatiquement une fois que la date de révélation d’une affirmation est atteinte, soit manuellement quand vous le souhaitez. Dans les deux cas, le contenu de l’affirmation est envoyé par email à la liste de vos destinataires, et vous êtes également informé.e par email de la révélation.',
      isOpen: false,
    },
    {
      id: 8,
      title:
        'A quelle heure est révélée une affirmation quand elle est révélée automatiquement ?',
      content:
        "Vous pouvez définir une date et une heure de révélation pour une affirmation, avec une granularité à la demie-heure : 12h00, 12h30, 13h00, etc... Généralement, votre affirmation sera révélée rapidement à compter de l'heure définie. Toutefois, ce délai peut varier en fonction du nombre de révélations à faire à la même date et heure.",
      isOpen: false,
    },
    {
      id: 9,
      title: "Que se passe-t-il une fois qu'une affirmation est révélée ?",
      content:
        "Une fois qu'une affirmation est révélée, elle est automatiquement archivée. Elle ne peut plus être révélée à nouveau, ni modifiée. Les affirmations archivées sont toujours accessibles dans l'onglet 'Affirmations archivées' de votre tableau de bord.",
      isOpen: false,
    },
  ];

  toggleQuestionAccordion(index: number): void {
    this.questions[index].isOpen = !this.questions[index].isOpen;
  }

  scroll() {
    const destination = document.getElementById('scroll-anchor');
    if (destination) destination.scrollIntoView({ behavior: 'smooth' });
  }

  register() {
    this.#router.navigate(['/register']);
  }

  navigateToStatements() {}

  navigateToContact() {}
}
