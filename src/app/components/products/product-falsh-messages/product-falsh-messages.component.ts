import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-falsh-messages',
  templateUrl: './product-falsh-messages.component.html',
  styleUrls: ['./product-falsh-messages.component.scss']
})
export class ProductFalshMessagesComponent implements OnInit {


  constructor() { }
  @Input()   message?:string;
  ngOnInit(): void {
  }

}
