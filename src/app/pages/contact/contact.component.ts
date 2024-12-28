import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-contact',
  imports: [NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected authService = inject(AuthService);
}
