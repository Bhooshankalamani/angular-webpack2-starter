import { CourseHomePageService } from './course-home-page.service';
import { PopularCourseCardDisplayModel } from './course-home-page.model';
import { ContentfulService } from './../shared/contentful/contentful.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'tf-course-home-page',
  templateUrl: './course-home-page.component.html',
  styleUrls: ['./course-home-page.component.css']
})
export class CourseHomePageComponent implements OnInit {
  navBarMenuType = 'For Learners';
  page = 'Home';
  ourJobPartner = 'Courses Home';
  testimonialType = 'Course Home';

  popularCourseCardDisplayModel: PopularCourseCardDisplayModel;
  constructor(private http: Http,
    private contentfulService: ContentfulService,
    private courseHomePageService: CourseHomePageService) { }
  ngOnInit() {
    this.getPopularCourseCards();
  }
  getPopularCourseCards() {
    this.contentfulService.getPopularCoursesData()
      .subscribe(
      (data: any) => {
        this.popularCourseCardDisplayModel = this.courseHomePageService.getPopularCourse(data);
      });
  }

}

