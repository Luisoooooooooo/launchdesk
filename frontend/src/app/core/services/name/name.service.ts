import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private name = "Luiso";

  getName() {
    return this.name;
  }

}
