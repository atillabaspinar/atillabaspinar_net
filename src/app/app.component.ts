import { Component } from '@angular/core';
import { UiEventsService } from './ui-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atillabaspinar';

  constructor(private uiService: UiEventsService) {
   
  }
}
