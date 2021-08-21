import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';


import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComparisonPageComponent } from './pages/comparison-page/comparison-page.component';
import { SequenceListComponent } from './components/sequence-list/sequence-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    DashboardComponent,
    OverviewPageComponent,
    ComparisonPageComponent,
    SequenceListComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
