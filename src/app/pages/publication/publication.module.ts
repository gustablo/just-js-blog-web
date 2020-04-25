import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutSharedModule } from '../../shared/flex-layout.module';
import { MaterialSharedModule } from '../../shared/material.module';
import { ComponentsModule } from '../../components/components.module';
import { PublicationRoutingModule } from './publication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationComponent } from './publication.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PublicationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutSharedModule,
    MaterialSharedModule,
    PublicationRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ]
})
export class PublicationModule { }
