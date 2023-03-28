import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  alias = 'SAOM';

  //function to receive message from child component
  receiveMessage(event: string) {
    alert(event);
  }

}
