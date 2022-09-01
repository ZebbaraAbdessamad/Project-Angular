import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.servic';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.scss']
})
export class ProductsNavBarComponent implements OnInit {

 // @Output() ProduiteventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor(
    private eventDrivenService:EventDriverService
  ) { }

  ngOnInit(): void {
  }

  showProducts(){
    // this.ProduiteventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  availableProduct(){
    //this.ProduiteventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  unavailableProduct(){
    // this.ProduiteventEmitter.emit({type:ProductActionsTypes.GET_UNAVAILABLE_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_UNAVAILABLE_PRODUCTS});
  }

  onSearch(dataForm:any){
    // this.ProduiteventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
  }
}
