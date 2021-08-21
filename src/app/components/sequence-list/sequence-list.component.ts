import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import '@vaadin/vaadin-checkbox';

@Component({
  selector: 'app-sequence-list',
  templateUrl: './sequence-list.component.html',
  styleUrls: ['./sequence-list.component.scss']
})
export class SequenceListComponent implements OnInit {

  @ViewChild('sequences_comp') sequences_comp: ElementRef;
  @ViewChild('show') show_btn: ElementRef; 
  @ViewChild('switchleft') switchBtnLeft: ElementRef;
  @ViewChild('switchright') switchBtnRight: ElementRef;
  @ViewChild('active') activeSwitch: ElementRef;
  @Output() show = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  viewType=2 //used to keep the state between the table and the list of images
  showImage = false
  original_data
  modified_data
  preloaded_imgs :Array<any>= []

  effects = [
    {
      title: "Brightness",
      original: 0.85,
      modified: 0.83,
    },
    {
      title: "Contrast",
      original: 0.91,
      modified: 0.76,
    },
    {
      title: "Glare",
      original: 0.89,
      modified: 0.56,
    },
    {
      title: "MotionBlur",
      original: 0.9,
      modified: 0.65,
    },
    {
      title: "Rain",
      original: 0.8,
      modified: 0.71,
    }
  ]

  dataset :Array<any>= []
  category_set :Array<any>= []
  prefix = '../assets/img/image_sequences/'

  ngOnInit(): void {

    this.generateDataSet()
    this.preLoadImages()

  
  }

  navigateBack(){
    this.router.navigateByUrl('/')
  }

  // animation effects of hiding showing the menu
  showMenu(){
    this.show.emit(true)
    this.sequences_comp.nativeElement.style.width = 'calc(84vw - 110px)'
    this.sequences_comp.nativeElement.style.padding = '0px 40px'
    this.show_btn.nativeElement.style.visibility = 'hidden'
  }

  fullscreen(){
    this.sequences_comp.nativeElement.style.width = 'calc(100vw - 82px)'
    this.sequences_comp.nativeElement.style.padding = '20px 40px'
    this.show_btn.nativeElement.style.visibility = 'visible'
  }

  // animation effects of the table -> images list switch
  switchRight(){
    this.viewType=1
    this.switchBtnRight.nativeElement.classList.add('active-case');
    this.switchBtnLeft.nativeElement.classList.remove('active-case');
    this.activeSwitch.nativeElement.style.left 						= '50%';
  }

  // animation effects of the table -> images list switch
  switchLeft(){
    this.viewType=2
    this.switchBtnRight.nativeElement.classList.remove('active-case');
    this.switchBtnLeft.nativeElement.classList.add('active-case');
    this.activeSwitch.nativeElement.style.left 						= '0%';
  }

//genetes the dataset
 generateDataSet(){
  
    for( let effect of this.effects){
      let category = []
      for(let i = 0; i<15; i++ ){ 
        let original = {
          category: effect.title,
          img:   effect.title + '_original_' + i + '.png',
          loss:  Math.round(Math.random() *100 )/100
        }     
        let modified= {
          category: effect.title,
          img:   effect.title + '_modified_' + i + '.png',
          loss: Math.round(Math.random() * 0.7 *100)/100
        }

        let data = [original , modified, false, Math.round((original.loss- modified.loss) * 100 ) / 100]
        category.push(data)
        this.dataset.push(data)
      }
      this.category_set.push([effect,category])
    }
    

 }

 //loads the image when the page is entered 
 preLoadImages(){
   for(let ind in this.dataset){
    this.preloaded_imgs[ind] =[]
    this.preloaded_imgs[ind][0] = new Image()
    this.preloaded_imgs[ind][1] = new Image()
    this.preloaded_imgs[ind][0].src = this.prefix+this.dataset[ind][0].img
    this.preloaded_imgs[ind][1].src = this.prefix+this.dataset[ind][1].img
   }

 }

 round_loss(n1,n2){
   return Math.round( (n1 - n2) * 100 ) / 100
 }

 //shows the image comparison modal
 openImage(data){
   this.original_data = data[0]
   this.modified_data = data[1]
   this.showImage =true
 }

//closes the image comparison modal
 closeEditor(e){
   if(e.target.id=='image-editor'){
    this.showImage=false
   }
 }

 //hanled the various types of sorting the list
 sortBy(param){
   if (param === "loss"){
    if ( this.dataset[0][3]<this.dataset[1][3]){
      this.dataset.sort((a,b)=>{
        if ( a[3] > b[3])  return -1;
        return 1;
      })
     }else{
      this.dataset.sort((a,b)=>{
        if ( a[3] > b[3])  return 1;
        return -1;
      })
     }
   }else{
    if (param === "checked"){
      if ( this.dataset[0][2]){
      this.dataset.sort((a,b)=>{
        if (a[2])  return 1;
        return -1;
      })
      }else{
        this.dataset.sort((a,b)=>{
          if (a[2])  return -1;
          return 1;
        })
      }
    }else{
      if (param === "name"){
        if (this.dataset[0][1].img > this.dataset[1][1].img){
          this.dataset.sort((a,b)=>{
            if (a[1].img > b[1].img)  return 1;
            return -1;
          })
        }else{
          this.dataset.sort((a,b)=>{
            if (a[1].img <= b[1].img)  return 1;
            return -1;
          })
        }
    }
   }
  }
  var table = document.getElementById("table");
  table.scrollTop = 0;
  
}
}


