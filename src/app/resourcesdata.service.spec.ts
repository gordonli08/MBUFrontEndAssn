import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResourcesDataService } from './resourcesdata.service';

describe('ResourcesdataService', () => {
  let service: ResourcesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(ResourcesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
