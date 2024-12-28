import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-legals',
  imports: [NgClass],
  templateUrl: './legals.component.html',
  styleUrl: './legals.component.css',
})
export class LegalsComponent {
  protected authService = inject(AuthService);
  protected email = 'vianneyaccart@gmail.com';
  protected emailPulseHeberg = 'contact@pulseheberg.com';
}
