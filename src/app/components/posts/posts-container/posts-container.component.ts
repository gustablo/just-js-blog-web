import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {

  @Input() post: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToPublication() {
    this.router.navigate(['publication', this.post.title]);
  }

}
