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

    this.http.get('https://just-js-blog-api.herokuapp.com/posts/' + title).subscribe((res: any) => {
      this.md = res.text;
      this.title = res.title;
    });
  }
}
