import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'resources', component: ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
