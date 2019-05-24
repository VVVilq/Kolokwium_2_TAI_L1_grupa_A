import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MW24_05Service } from './services/mw-24.05.service';
import { MWBlogComponent } from './components/mw-blog/mw-blog.component';
import { MWBlogItemComponent } from './components/mw-blog-item/mw-blog-item.component';
import { MWBlogDetailsComponent } from './components/mw-blog-details/mw-blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MWBlogComponent,
    MWBlogItemComponent,
    MWBlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MW24_05Service,
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
