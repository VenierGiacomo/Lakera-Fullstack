import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  @ViewChild('dashboard') dashboard: ElementRef;
  @ViewChild('show') show_btn: ElementRef; 
  @Output() show = new EventEmitter<boolean>();


  

  // char options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Sequence';
  showYAxisLabel = true;
  yAxisLabel = 'Accuracy';
  cart_data =[
    {
      "name": "Brightness Std",
      "value": 0.85,
    },
    {
      "name": "Brightness Mod ",
      "value": 0.83,
    },
    {
      "name": "",
      "value": "",
    },
    {
      "name": "Contrast Std",
      "value": 0.91,
    },
    {
      "name": "Contrast Mod",
      "value": 0.76,
    },
    {
      "name": "  ",
      "value": "",
    },
    {
      "name": "MotionBlur Std",
      "value": 0.89,
    },
    {
      "name": "MotionBlur Mod",
      "value": 0.56,
    },
    {
      "name": "   ",
      "value": "",
    },
    {
      "name": "Glare Std",
      "value": 0.90,
    },
    {
      "name": "Glare Mod",
      "value": 0.65,
    },
    {
      "name": "    ",
      "value": "",
    },
    {
      "name": "Rain Std",
      "value": 0.85,
    },
    {
      "name": "Rain Mod",
      "value": 0.71,
    },
  ]
  
  colorScheme = {
  domain: ['#C7C8D2', '#539d70', '#000000', '#C7C8D2', '#bf4444','#000000', '#C7C8D2','#bf4444','#000000','#C7C8D2', '#bf4444','#000000','#C7C8D2', '#bf4444']

  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToComparison(){
    this.router.navigateByUrl('/comparison')
  }

  showMenu(){
    this.show.emit(true)
    this.dashboard.nativeElement.style.left = 'calc( 16vw - 80px)'
    this.dashboard.nativeElement.style.width = 'calc(84vw - 110px)'
    this.dashboard.nativeElement.style.padding = '0px 40px'
    this.show_btn.nativeElement.style.visibility = 'hidden'
  }

  fullscreen(){
    this.dashboard.nativeElement.style.left = '0px'
    this.dashboard.nativeElement.style.width = 'calc(100vw - 82px)'
    this.dashboard.nativeElement.style.padding = '20px 40px'
    this.show_btn.nativeElement.style.visibility = 'visible'
  }
}
