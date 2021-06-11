import { TestBed } from '@angular/core/testing';

import { SellerprofileService } from './sellerprofile.service';

describe('SellerprofileService', () => {
  let service: SellerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
