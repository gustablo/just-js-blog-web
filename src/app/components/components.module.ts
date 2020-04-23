import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './toolbar/toolbar.component';

import { FlexLayoutSharedModule } from '../shared/flex-layout.module';
import { MaterialSharedModule } from '../shared/material.module';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';

import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutSharedModule,
    PostsModule
  ],
  exports: [
    ToolbarComponent,
    BannerComponent,
    PostsModule,
    FooterComponent,
  ]
})
export class ComponentsModule { }
