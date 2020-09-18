  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-eventfiltering',
    templateUrl: './eventfiltering.component.html',
    styleUrls: ['./eventfiltering.component.css']
  })
  export class EventfilteringComponent implements OnInit {
  // onKeyUp($event){
  // if($event.keyCode ===13 )
  // console.log("Enter Pressed");
  // }

  // onKeyUp(){   
  //   console.log("Enter Pressed");
  //   }

  // onKeyUp($event){   
  //   console.log($event.target.value);
  //   }

    onKeyUp(email){   
      console.log(email);
      }
    constructor() { }

    ngOnInit() {
    }

  }
