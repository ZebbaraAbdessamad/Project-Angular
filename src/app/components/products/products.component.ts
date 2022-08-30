import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  //constructor who use Service product
  constructor(private productsservice:ProductsService,private router:Router) {

  }

  //decelartion of variables
  message:any;
  products:Product[]| null=null;
  product:any;
  page:any = 1;
  pageSize:any = 4;
  collectionSize:any;
  success:any;
  //function main
  ngOnInit(): void {
  }

  //show all products
  showProducts():void{
    this.productsservice.listProducts().subscribe(products=>{
      this.products=products;
      console.log(this.products);
    },err=>{
      console.log(err);
    });
  }

  //search by name for products
  onSearch(dataForm:any){
    this.productsservice.searchProducts(dataForm.keyword).subscribe(products=>{
      this.products=products;
      console.log(this.products);
    },err=>{
      console.log(err);
    });
  }

  //show available products
  availableProduct():void{
    this.productsservice.getAvailableProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    },err=>{
      console.log(err);
    });
  }


  //show unavailable products
  unavailableProduct():void{
    this.productsservice.getUnavailableProducts().subscribe(data=>{
      this.products=data;
      console.log(this.products);
    },err=>{
      console.log(err);
    });
  }

  //select status product
  onSelect(P:Product){
    this.productsservice.onSelectStatus(P).subscribe(data=>{
      this.product=data;
      console.log(this.product);
    },err=>{
      console.log(err);
    });
  }

  //delete product
  ondeleteProduct(P:Product){
    let v=confirm('are sure you want to remove this product!!')
    if(v==true){
      this.productsservice.Ondelete(P).subscribe(data=>{
        this.product=data;
        this.message=data.message;
        console.log(this.product);
        this.showProducts();
      },err=>{
        console.log(err);
      });
    }
  }

  //update product
  onUpdateProduct(product:Product){
    this.productsservice.onUpdate(product).subscribe(data=>{
      this.product=data;
      this.message=data.message;
      console.log(this.product);
      this.showProducts();
    },err=>{
      console.log(err);
    });
  }

  //page of edit product
  onEdit(product:Product){
    this.router.navigateByUrl('/edit-product/'+product.id)
  }
}
