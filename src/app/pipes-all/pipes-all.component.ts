import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-all',
  templateUrl: './pipes-all.component.html',
  styleUrls: ['./pipes-all.component.css']
})
export class PipesAllComponent implements OnInit {
course={
  title:"The Complate Angular Course",
  rating:4.9745,
  students:32323,
  price:190.95,
  releaseDate:new Date(2020,4,18)
}
  constructor() { }

  ngOnInit() {
  }

}
