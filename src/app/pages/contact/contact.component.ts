import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {
  FormBuilder,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [NgClass, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  protected authService = inject(AuthService);
  private formBuilder = inject(FormBuilder);

  contactForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  submit() {
    console.log(this.contactForm.value);
  }
}
