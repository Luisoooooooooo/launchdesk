import { Component } from '@angular/core';
import { NameService } from '../../core/services/name/name.service';

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
  ) {}

}
