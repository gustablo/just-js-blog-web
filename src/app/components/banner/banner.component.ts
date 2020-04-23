import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  backgroundUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.backgroundUrl = `url(https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg) no-repeat center center`
  }

}
