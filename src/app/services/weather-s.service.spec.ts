import { TestBed } from '@angular/core/testing';

import { WeatherSService } from './weather-s.service';

describe('WeatherSService', () => {
  let service: WeatherSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
