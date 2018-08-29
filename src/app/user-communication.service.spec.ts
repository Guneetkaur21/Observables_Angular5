import { TestBed, inject } from '@angular/core/testing';

import { UserCommunicationService } from './user-communication.service';

describe('UserCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserCommunicationService]
    });
  });

  it('should be created', inject([UserCommunicationService], (service: UserCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
