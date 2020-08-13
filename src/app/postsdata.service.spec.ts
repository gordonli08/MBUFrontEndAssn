import { TestBed } from '@angular/core/testing';

import { PostsDataService } from './postsdata.service';

describe('PostsdataService', () => {
  let service: PostsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
