import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutSharedModule } from '../../shared/flex-layout.module';
import { MaterialSharedModule } from '../../shared/material.module';

import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';

@NgModule({
  declarations: [
    PostsComponent,
    PostsListComponent,
    PostsContainerComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutSharedModule
  ],
  exports: [
    PostsComponent,
  ]
})
export class PostsModule { }
