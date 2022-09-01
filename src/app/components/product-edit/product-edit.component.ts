import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  EditproductFormGroup!:FormGroup;
  message?:string;
  productId:any;
  product?:Product;
  submitted:boolean=false;
  constructor( private activatedRoute:ActivatedRoute,private productsService:ProductsService,private fb:FormBuilder){
    this.productId=activatedRoute.snapshot.params?.['id'];
   }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId).subscribe(product=>{
      this.product=product;
      this.EditproductFormGroup =this.fb.group({
          id:[product.id , Validators.required],
          name:[product.name , Validators.required],
          price:[product.price, Validators.required],
          status:[product.status, Validators.required],
      })
    })
  }

  //method update
  onUpdateProduct(){
    this.submitted=true;
    if(this.EditproductFormGroup.invalid) return;
    this.productsService.onUpdate(this.EditproductFormGroup.value).subscribe(
      data=>{
       this.message=data.message;
       console.log(data);
      },err=>{
        console.log(err);
      });
  }

}
