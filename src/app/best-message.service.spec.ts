import { TestBed } from '@angular/core/testing';

import { BestMessageService } from './best-message.service';

describe('BestMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestMessageService = TestBed.get(BestMessageService);
    expect(service).toBeTruthy();
  });
});
