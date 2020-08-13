import { Component, OnInit } from '@angular/core';
import { PostsDataService } from '../postsdata.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [];

  constructor(private postDataService: PostsDataService) { }

  ngOnInit(): void {
    this.postDataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.posts = data;
    })
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(item => item.id !== id);
  }

}
