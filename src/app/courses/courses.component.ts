import { Component, OnInit } from '@angular/core'; 
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
title="List of Courses";
imageURL="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png";
courses;

isActive=true;

// onSave(){
//   console.log('Button was clicked');
// }

// onSave($event){
//   console.log('Button was clicked',$event);
// }

onSave(){
  console.log('Button was clicked');
}


//Add logic for calling an HTTP service

getTitle(){
  return this.title;
}
  constructor(service:CoursesService) {
    // let service=new CoursesService();   - Remove this line and add service in constructor
    this.courses=service.getCourses();
   }

  ngOnInit() {
  }

}
