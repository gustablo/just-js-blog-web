import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  md: any;
  title: string;
  subtitle: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  createPost() {
    const data = {
      title: this.title,
      subtitle: this.subtitle,
      text: this.md,
      categories: [],
    };

    const bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdwQGdtYWlsLmNvbSIsInN1YiI6IjVlYTIzYTAyNGZlYzM1NzFjMGZlMThhZSIsImlhdCI6MTU5MzI5MTM0OCwiZXhwIjoxNTkzMzc3NzQ4fQ.52SE3cy_I72rgOPIHTwTc6N0hkvP0C8P_vA2GvkuOXQ'
  
    this.http.post('https://one-post-api.herokuapp.com/posts', data, { headers: { Authorization: bearer } }).subscribe(res => {

    });
  }


}
