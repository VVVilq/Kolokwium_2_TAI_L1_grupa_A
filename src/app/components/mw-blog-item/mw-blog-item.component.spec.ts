import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MWBlogItemComponent } from './mw-blog-item.component';

describe('MWBlogItemComponent', () => {
  let component: MWBlogItemComponent;
  let fixture: ComponentFixture<MWBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MWBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MWBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
