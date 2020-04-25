import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialSharedModule } from './shared/material.module';
import { FlexLayoutSharedModule } from './shared/flex-layout.module';
import { ComponentsModule } from './components/components.module';
// import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    FlexLayoutSharedModule,
    ComponentsModule,
    // PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
