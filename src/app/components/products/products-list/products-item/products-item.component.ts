import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.servic';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {


  @Input()   element?:Product;
  @Input() i:any;

  //@Output() ProductEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();
  constructor(
    private eventDrivenService:EventDriverService
  ) { }

  ngOnInit(): void {
  }

  onEdit(p:Product){
    // this.ProductEventEmitter.emit({
    //   type:ProductActionsTypes.Edit_PRODUCT,payload:p
    // })
    this.eventDrivenService.publishEvent({ type:ProductActionsTypes.Edit_PRODUCT,payload:p})
  }

  ondeleteProduct(p:Product){
    // this.ProductEventEmitter.emit({
    //   type:ProductActionsTypes.DELETE_PRODUCT,payload:p
    // })
    this.eventDrivenService.publishEvent({  type:ProductActionsTypes.DELETE_PRODUCT,payload:p})
  }

  onSelect(p:Product){
    // this.ProductEventEmitter.emit({
    //   type:ProductActionsTypes.CHANGE_STATUS_PRODUCT,payload:p
    // })
    this.eventDrivenService.publishEvent({ type:ProductActionsTypes.CHANGE_STATUS_PRODUCT,payload:p})
  }
}
