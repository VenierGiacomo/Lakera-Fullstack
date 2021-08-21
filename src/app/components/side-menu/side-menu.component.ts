import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @ViewChild('menu') menu: ElementRef ;
  @ViewChild('hide') hide_btn: ElementRef;
  @Output() hidden = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  hideMenu(){
    this.hidden.emit(true)
    this.menu.nativeElement.style.width = '0px'
    this.menu.nativeElement.style.padding = '0px'
    this.hide_btn.nativeElement.style.visibility = 'hidden'
  }

  showMenu(){
    this.menu.nativeElement.style.width = '16vw'
    this.menu.nativeElement.style.padding = '0px 15px'
    this.hide_btn.nativeElement.style.visibility = 'visible'
  }
}
