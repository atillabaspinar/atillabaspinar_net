import { Component, OnInit, Renderer2 } from '@angular/core';
import { UiEventsService } from '../ui-events.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private uiService: UiEventsService) { }

  ngOnInit() {
    setTimeout(() => {
      const nav  = document.getElementsByClassName('container--nav ').item(0);
      if (nav) {
        (nav as HTMLElement).style.justifyContent = 'flex-end';

        }
      }, 1000);
  }

  onButtonClick() {
    this.uiService.menuToggle();
  }

}
