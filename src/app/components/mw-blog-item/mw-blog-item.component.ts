import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mw-blog-item',
  templateUrl: './mw-blog-item.component.html',
  styleUrls: ['./mw-blog-item.component.css']
})
export class MWBlogItemComponent implements OnInit {

  @Input() title: string;
  @Input() image: string;
  @Input() text: string;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
