import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostsDataService } from './postsdata.service';

describe('PostsdataService', () => {
  let service: PostsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(PostsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
