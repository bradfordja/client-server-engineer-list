import { TestBed } from '@angular/core/testing';

import { SiteLocationService } from './site-location.service';

describe('SiteLocationService', () => {
  let service: SiteLocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteLocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
