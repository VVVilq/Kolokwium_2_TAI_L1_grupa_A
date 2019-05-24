import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MWBlogDetailsComponent } from './mw-blog-details.component';

describe('MWBlogDetailsComponent', () => {
  let component: MWBlogDetailsComponent;
  let fixture: ComponentFixture<MWBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MWBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MWBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
