import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiEventsService {

  menuButtonState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }
  menuToggle() {
    
    
    const value = this.menuButtonState.getValue();
    console.log(value);
    this.menuButtonState.next(!value);
  }

}
