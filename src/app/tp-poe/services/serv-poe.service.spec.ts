import { TestBed } from '@angular/core/testing';

import { ServPoeService } from './serv-poe.service';

describe('ServPoeService', () => {
  let service: ServPoeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPoeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
