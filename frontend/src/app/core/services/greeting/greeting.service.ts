import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  getGreetingMessage() {
    const hour = new Date().getHours();
    if (hour > 6 && hour < 12) return `Good morning, `;
    if (hour > 12 && hour < 18) return `Good afternoon, `;
    if (hour > 18 && hour < 21) return `Good evening, `;
    return `Good nigth, `;
  }
}
