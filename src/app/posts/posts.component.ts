import { Component, OnInit } from '@angular/core';
import { PpostsService } from '../services/pposts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  constructor(private service: PpostsService) {
 
}
  ngOnInit() {
   this.service.getpost()
    .subscribe(res => {
      this.posts = res;
      console.log(res);
    },error=>{
      alert('an expacted error occurred');
      console.log(error);
    });
}
createPost(input: HTMLInputElement) {
  let post = { title: input.value };
  input.value = '';
this.service.createPost(post)
    .subscribe(res => {
      post['id'] = res;
      this.posts.splice(0, 0, post);
    })

}
updatePost(post) {
  this.service.updatePost(post)
    .subscribe(res => {
      console.log(res)
    })
}
deletePost(post){
this.service.deletePost(post.id)
.subscribe(res=>{
  let i=this.posts.indexOf(post);
  this.posts.splice(i,1);
})
  }

}
