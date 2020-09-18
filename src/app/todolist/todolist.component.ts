import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  })
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopics(topic:FormControl){
    let i=this.topics.controls.indexOf(topic);
    this.topics.removeAt(i);
  }
  get topics(){
    return this.form.get('topics')  as FormArray;
  }
  constructor() { }

  ngOnInit() {
  }

}
