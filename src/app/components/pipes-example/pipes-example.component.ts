import { Component, OnInit } from '@angular/core';
import { IPlayer } from 'src/models/player.interface';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.scss']
})
export class PipesExampleComponent implements OnInit {

  dob: Date = new Date(1997, 4, 17);
  change: boolean = true;
  name: string = 'John Doe';
  //Var to use a decimal pipe
  pi: number = 3.14159265359;
  //Var to use a currency pipe
  price: number = 100;
  //Creating a player
  player1: IPlayer = {
    name: 'John',
    points: [10, 30, 40, 0]
  };
  player2: IPlayer = {
    name: 'Jane',
    points: [20, 40, 50, 0]
  }


  constructor() { }

  ngOnInit() {
  }

  get dateFormat() {
    return this.change ? 'shortDate' : 'fullDate';
  }

  get year() {
    return this.dob.getFullYear();
  }

  changeDobFormat() {
    this.change = !this.change;

  }

}
