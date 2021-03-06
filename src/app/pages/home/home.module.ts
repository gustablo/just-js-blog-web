import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { FlexLayoutSharedModule } from '../../shared/flex-layout.module';
import { MaterialSharedModule } from '../../shared/material.module';
import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutSharedModule,
    MaterialSharedModule,
    HomeRoutingModule,
    ComponentsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
