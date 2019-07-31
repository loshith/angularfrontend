import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import { PostsService } from '../post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


enterdTitle = '';
enterdContent = '';

onAddpost(form: NgForm) {
  if (form.invalid) {
  return;
  }

  this.postService.addPost(form.value.title, form.value.content );
  form.resetForm();
}
constructor(public postService: PostsService) { }

  ngOnInit() {
  }

}
