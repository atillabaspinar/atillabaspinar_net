import { TestBed } from '@angular/core/testing';

import { UiEventsService } from './ui-events.service';

describe('UiEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiEventsService = TestBed.get(UiEventsService);
    expect(service).toBeTruthy();
  });
});
