import { Component, OnInit } from '@angular/core';
import { MW24_05Service } from 'src/app/services/mw-24.05.service';

@Component({
  selector: 'mw-blog',
  templateUrl: './mw-blog.component.html',
  styleUrls: ['./mw-blog.component.css']
})
export class MWBlogComponent implements OnInit {

  public items$: any;
  
  constructor(private service: MW24_05Service) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
  });
}
}
