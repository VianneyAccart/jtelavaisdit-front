import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private httpClient = inject(HttpClient);

  sendContactForm(contactRequest: any): Observable<void> {
    return this.httpClient.post<void>(
      environment.apiUrl + '/contact',
      contactRequest
    );
  }
}
