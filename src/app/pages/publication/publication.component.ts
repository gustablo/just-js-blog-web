import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  md: string;
  title: string;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const title = this.activatedRoute.snapshot.params.title;

    this.http.get('http://localhost:3000/posts').subscribe(res => {
      console.log(res[0]);
      this.md = res[0].text;
      this.title = res[0].title;
    });
  }

  asd() {
    const data = {
      title: '123',
      text: this.md,
      categories: [],
    };

    const bearer = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdwQGdtYWlsLmNvbSIsInN1YiI6IjVlYTIzYTAyNGZlYzM1NzFjMGZlMThhZSIsImlhdCI6MTU4Nzc5MDM5NywiZXhwIjoxNTg3ODc2Nzk3fQ.CjcWLGxkwFqsf12RAHtYrV8kbmtkQ212rkP-HuVOxeg'
  
    this.http.post('http://localhost:3000/posts', data, { headers: { Authorization: bearer } }).subscribe(res => {

    });
  }

}
