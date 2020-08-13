import { Component, OnInit } from '@angular/core';
import { ResourcesDataService } from '../resourcesdata.service'
import { PageEvent } from '@angular/material/paginator';
import { Resource } from 'src/app/model/resource.model';


@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resource: Resource;
  colsize = 2;
  page = 1;
  
  constructor(private resourcesDataService: ResourcesDataService) { }

  ngOnInit(): void {
    this.resourcesDataService.sendGetRequest(this.page).subscribe((resource: Resource) => {
      console.log(resource);
      this.resource = resource;
    });
  }

  OnPageChange(event: PageEvent){
    console.log(event);
    this.page = event.pageIndex+1;
    this.resourcesDataService.sendGetRequest(this.page).subscribe((resource: Resource) => {
      console.log(resource);
      this.resource = resource;   
    });
    
    
  }

  onResize(event) { //to adjust to screen size
    this.colsize = (event.target.innerWidth <= 800) ? 1 : 2;
  }

}
