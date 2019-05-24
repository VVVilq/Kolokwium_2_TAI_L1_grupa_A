import { TestBed } from '@angular/core/testing';

import { MW24_05Service } from './mw-24.05.service';

describe('MW24.05Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MW24_05Service = TestBed.get(MW24_05Service);
    expect(service).toBeTruthy();
  });
});
