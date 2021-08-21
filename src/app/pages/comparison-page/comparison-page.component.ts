import { Component, OnInit, ViewChild } from '@angular/core';
import { SequenceListComponent } from 'src/app/components/sequence-list/sequence-list.component';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent implements OnInit {
  @ViewChild(SideMenuComponent) menu: SideMenuComponent ;
  @ViewChild(SequenceListComponent) sequences_comp: SequenceListComponent;
  
  constructor() { }

  ngOnInit(): void {
  }


  closeMenu(){
    this.sequences_comp.fullscreen()
  }

  showMenu(){
    this.menu.showMenu()
  }
}
