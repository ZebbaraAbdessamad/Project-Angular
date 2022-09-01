import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "./product.state";
@Injectable({providedIn:"root"})

export class EventDriverService{
  //pour publier un evenement | utilisé pour centraliser tous les evenments dans un seule subject
  sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();

  //pour ecouter à les evenements lorsque utilise subscribe
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  //function who use for publish event

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }


}
