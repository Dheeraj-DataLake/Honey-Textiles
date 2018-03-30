import { TestBed, inject } from '@angular/core/testing';

import { HoneyService } from './honey.service';

describe('HoneyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoneyService]
    });
  });

  it('should be created', inject([HoneyService], (service: HoneyService) => {
    expect(service).toBeTruthy();
  }));
});
