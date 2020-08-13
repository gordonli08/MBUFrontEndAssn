import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  private POSTS_API = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.POSTS_API);
  }
}
