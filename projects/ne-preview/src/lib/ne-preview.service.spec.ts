import { TestBed, inject } from '@angular/core/testing';

import { NePreviewService } from './ne-preview.service';

describe('NePreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NePreviewService]
    });
  });

  it('should be created', inject([NePreviewService], (service: NePreviewService) => {
    expect(service).toBeTruthy();
  }));
});
