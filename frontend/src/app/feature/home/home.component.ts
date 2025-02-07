import { Component } from '@angular/core';
import { NameService } from '../../core/services/name/name.service';
import { GreetingService } from '../../core/services/greeting/greeting.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(
    public nameService: NameService,
    public greetingService: GreetingService
  ) {}

}
