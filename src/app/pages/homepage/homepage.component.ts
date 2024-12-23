import { Component, inject } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faPaperPlane, faClock, faFolder } from '@fortawesome/free-regular-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../shared/services/auth.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [CardComponent, FontAwesomeModule, NgIf, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  auth = inject(AuthService);

  faCalendar = faCalendar;
  faPaperPlane = faPaperPlane;
  faClock = faClock;
  faFolder = faFolder
  faChartLine = faChartLine;

  accordions = [
    { title: 'Est-ce que je peux utiliser jtelavaisdit gratuitement ?', content: 'Oui, jtelavaisdit est entièrement gratuit. Commencez par vous enregistrer pour pouvoir utiliser l’ensemble de nos fonctionnalités.', isOpen: true },
    { title: 'Accordéon 2', content: 'Contenu de l\'accordéon 2', isOpen: false },
    { title: 'Accordéon 3', content: 'Contenu de l\'accordéon 3', isOpen: false },
  ];

  // Méthode pour basculer l'état d'un accordéon
  toggleAccordion(index: number): void {
    this.accordions[index].isOpen = !this.accordions[index].isOpen;
  }

  scroll() {
    const destination = document.getElementById('scroll-anchor');
    if (destination) destination.scrollIntoView({ behavior: 'smooth' });
  }

  register() {

  }

  navigateToStatements() {
    
  }
}
