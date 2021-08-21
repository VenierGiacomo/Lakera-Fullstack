import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

import { SideMenuComponent} from '../../components/side-menu/side-menu.component'

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  @ViewChild(SideMenuComponent) menu: SideMenuComponent ;
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;
  
  constructor() { }

  ngOnInit(): void {
  }


  closeMenu(){
    this.dashboard.fullscreen()
  }

  showMenu(){
    this.menu.showMenu()
  }

}
