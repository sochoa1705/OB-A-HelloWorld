import { Component, OnInit } from '@angular/core';

//Create a type for the product
export type Product = {
  name: string;
  price: number;
  description: string
}
@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {

  
  elementList: Product[] = [
  {
    name: 'Product 1',
    price: 100,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl.'
  },
  {
    name: 'Product 2',
    price: 200,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquet nisl, eget aliquet nisl nisl eget nisl.'
  }
]
  loading: boolean = false;
  color: string = 'red';

  constructor() { }

  ngOnInit(): void {
      
  }

  changeLoading() {
    this.loading = !this.loading;
  }

}
