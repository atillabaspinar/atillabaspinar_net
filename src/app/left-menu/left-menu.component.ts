import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UiEventsService } from '../ui-events.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit, OnChanges {

  constructor(private uiService: UiEventsService) { }

  @Input() state;

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.state) {

    }
  }

}
