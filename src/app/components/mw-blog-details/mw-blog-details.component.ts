import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MW24_05Service } from 'src/app/services/mw-24.05.service';

@Component({
  selector: 'app-mw-blog-details',
  templateUrl: './mw-blog-details.component.html',
  styleUrls: ['./mw-blog-details.component.css']
})
export class MWBlogDetailsComponent implements OnInit {

  public image: '';
  public text: string;
  public title: string;
  public id: number;
  constructor(private dataService: MW24_05Service, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
         .subscribe(params => {
           id = params.get('id');
      });
    if (id) {
         this.dataService.getById(id).subscribe(res => {
           this.image = res['image'];
           this.text = res['text'];
           this.id = res['id'];
           this.title=res['title'];
      });
    } else {
         this.id = 1;
    }
  }

}
