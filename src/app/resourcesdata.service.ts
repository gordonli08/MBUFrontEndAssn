import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesDataService {

  private RESOURCES_API = "https://reqres.in/api/unknown";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(page: number) {
    return this.httpClient.get(this.RESOURCES_API+'?page='+page);
  }
}
