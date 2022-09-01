import { Component, OnInit } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.servic';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  counter:number=0;
  constructor(private eventDrivenService:EventDriverService ) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((eventAction:ActionEvent)=>{
     // if(eventAction.type==ProductActionsTypes.DELETE_PRODUCT){
        ++this.counter;
     // }
    });
  }

}
