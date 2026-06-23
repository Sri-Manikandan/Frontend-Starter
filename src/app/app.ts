import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MessageResponse {
  message: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5000/api/message';

  protected readonly title = signal('Angular + ASP.NET Core Starter');
  protected readonly message = signal('Click the button to call the API.');
  protected readonly loading = signal(false);
  protected readonly error = signal('');

  getMessage(): void {
    this.loading.set(true);
    this.error.set('');
    this.http.get<MessageResponse>(this.apiUrl).subscribe({
      next: (res) => {
        this.message.set(res.message);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Could not reach the API. Is the backend running on port 5048?');
        this.loading.set(false);
      }
    });
  }
}
