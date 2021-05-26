import { TestBed } from '@angular/core/testing';

import { ViewBasicService } from './view-basic.service';

describe('ViewBasicService', () => {
  let service: ViewBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
