import {Component, OnInit} from '@angular/core';
import {CoursesService} from "../services/courses.service";
import {map} from "rxjs/operators";
import {sortCoursesBySeqNo} from './sort-course-by-seq';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    beginnerCourses$: any;
    advancedCourses$: any;

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit() {
      this.reloadCourses();
    }


    reloadCourses() {
      const courses$ = this.coursesService.findAllCourses();
      this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');
      this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');

    }

    filterByCategory(courses$: any, category:string) {
      return courses$.pipe(
        map(courses => courses.filter(course => course.category === category).sort(sortCoursesBySeqNo) )
      );
    }

}
