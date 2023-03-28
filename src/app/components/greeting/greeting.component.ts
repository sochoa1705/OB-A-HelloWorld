import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  
  @Input()  name: string = "ochi";
  @Output() messageEmitter: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {}

  ngOnInit(): void {
      //First Instructions behind component renderize
      console.log("ngOnInit from Greetting Component!!")
  }

  /*
  Example: Event managment -> on click on DOM and send message to parent component
   */
  sendMessageToParent(): void {
    //alert(`Hello ${this.name}. Alert from Greeting Component!!`)
    this.messageEmitter.emit(`Hello ${this.name}. Alert from Greeting Component!!`)
  }



  

}
// Orden de ciclo de vida de los componentes:
// * 1. ngOnChanges
// * 2. ngOnInit
//   3. ngAfterContentInit
//   4. ngAfterContentChecked
//   5. ngAfterViewInit
//   6. ngAfterViewChecked
//   7. ngAfterContentChecked
//   8. ngAfterViewChecked
// * 9. ngOnDestroy