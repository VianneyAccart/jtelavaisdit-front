import { Component, HostListener } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-homepage',
  imports: [CardComponent, FontAwesomeModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  faCalendar = faCalendar;
  faPaperPlane = faPaperPlane;

  scroll() {
    const destination = document.getElementById('scroll-anchor');
    if (destination) destination.scrollIntoView({ behavior: 'smooth' });
  }
}
