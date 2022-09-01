import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event.driver.servic';
import { ProductActionsTypes } from 'src/app/state/product.state';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  productFormGroup!:FormGroup;
  message?:string;
  name:any;
  submitted:boolean=false;

  constructor(
    private fb:FormBuilder ,
    private productService:ProductsService,
    private eventDrivenService:EventDriverService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name:["", Validators.required],
      price:[, Validators.required],
      status:[,Validators.required],
    });
  }

  AddProduct(){
    this.submitted=true;
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.PRODUCT_ADDED});
    if(this.productFormGroup.invalid) return;
    this.productService.OnsaveProduct(this.productFormGroup.value).subscribe(data=>{
      this.message=data.message;
    },err=>{
      console.log(err);
    });
  }


}
