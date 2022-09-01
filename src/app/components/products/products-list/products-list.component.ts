import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

   //decelartion of variables
    page:any = 1;
    pageSize:any = 4;
    collectionSize:any;
    success:any;
    constructor() { }

  @Input()   products:Product[]| null=null;
  @Output() ProductEventEmitter:EventEmitter<ActionEvent>=new EventEmitter();

  ngOnInit(): void {
  }

  onSelect(P:Product){
    this.ProductEventEmitter.emit({
      type:ProductActionsTypes.CHANGE_STATUS_PRODUCT ,payload:P
    });
  }

  onEdit(P:Product){
    this.ProductEventEmitter.emit({
      type:ProductActionsTypes.Edit_PRODUCT ,payload:P
    });
  }
  ondeleteProduct(P:Product){
    this.ProductEventEmitter.emit({
      type:ProductActionsTypes.DELETE_PRODUCT ,payload:P
    });
  }

  onAction($event:ActionEvent){
    this.ProductEventEmitter.emit($event);
  }

}
