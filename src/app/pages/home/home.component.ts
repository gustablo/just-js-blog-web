import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://just-js-blog.herokuapp.com/posts').subscribe(posts => {
      this.posts = posts;
    });
  }

}
