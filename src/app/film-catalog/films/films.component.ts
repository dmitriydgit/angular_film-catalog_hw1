// 
//import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
// import { FilmService } from '../film.service';

// @Component({
//   selector: 'app-film-item',
//   templateUrl: './film-item.component.html',
//   styleUrls: ['./film-item.component.css']
// })
// export class FilmItemComponent implements OnInit {
//   items: object[] = [];

//   constructor(public filmsService: FilmService) { }

//   @Output() onChanged = new EventEmitter(); 

//   // buttonStatus: boolean = false;

//   change(increased: any) {
//     this.onChanged.emit(increased);
    
//     // this.buttonStatus = true;
//   }
  
//   ngOnInit() {
//     this.items = this.filmsService.getData();
//   }

// }


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FilmService } from '../film.service';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: '.films',
  templateUrl: './films.component.html',
	styleUrls: ['./films.component.css'],
	providers: [FilmService]
})
export class FilmsComponent implements OnInit {

	items: object[] = [];
  description: string = 'Middle card description';
  
  
  constructor(public filmsService: FilmService) { 
    
  }
  
  ngOnInit() { 
    this.items = this.filmsService.getData();
  }
  
}


//import {Component} from '@angular/core';

/**
//  * @title Basic grid-list
//  */
// @Component({
//   selector: 'grid-list-overview-example',
//   styleUrls: ['grid-list-overview-example.css'],
//   templateUrl: 'grid-list-overview-example.html',
// })
// export class GridListOverviewExample {}