import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeekdayService {

  getWeekDay(): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    return days[today];
  }

}
