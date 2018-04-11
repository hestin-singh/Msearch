import { TestBed, inject } from '@angular/core/testing';

import { MservService } from './mserv.service';

describe('MservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MservService]
    });
  });

  it('should be created', inject([MservService], (service: MservService) => {
    expect(service).toBeTruthy();
  }));
});
