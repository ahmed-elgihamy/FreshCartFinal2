import { TestBed } from '@angular/core/testing';

import { EcommerceDataService } from './ecommerce-data.service';

describe('EcommerceDataService', () => {
  let service: EcommerceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
