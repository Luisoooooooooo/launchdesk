import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  private time = signal(this.formatTime(new Date()));
  private period = signal(this.getPeriod(new Date()));

  constructor() {
    setInterval(() => {
      const now = new Date();
      this.time.set(this.formatTime(now));
      this.period.set(this.getPeriod(now));
    }, 1000);
  }

  private formatTime(date: Date): string {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  private getPeriod(date: Date): string {
    return date.getHours() < 12 ? 'AM' : 'PM';
  }

  getTime(): string {
    return this.time();
  }

  getPeriodIndicator(): string {
    return this.period();
  }

}
