import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MWBlogComponent } from './mw-blog.component';

describe('MWBlogComponent', () => {
  let component: MWBlogComponent;
  let fixture: ComponentFixture<MWBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MWBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MWBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
