import { TestBed } from '@angular/core/testing';

import { NgFormUtilsService } from './ng-form-utils.service';

describe('NgFormUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgFormUtilsService = TestBed.get(NgFormUtilsService);
    expect(service).toBeTruthy();
  });
});
