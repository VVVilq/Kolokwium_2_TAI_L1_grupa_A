import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MWBlogDetailsComponent } from './components/mw-blog-details/mw-blog-details.component';
import { MWBlogComponent } from './components/mw-blog/mw-blog.component';

const routes: Routes = [{
  path: '',
  component: MWBlogComponent
},{
  path: 'blog/detail/:id',
  component: MWBlogDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
