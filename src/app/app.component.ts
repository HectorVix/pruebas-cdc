import { Component  } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  title = 'app';
  optionsSelect: Array<any>;
  // data supplied to the data table
  private data: any[];
  // array of currently selected entities in the data table
  selectedEntities: any[];

  // function to handle data/entities selected/deselected in the table 
  public setSelectedEntities($event: any) {
     this.selectedEntities = $event;
 }
  constructor() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
  ];
this.data = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    link: '<a href="http://www.google.com">Google</a>',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    link: '<a href="https://github.com/akveo/ng2-smart-table">Ng2 smart table</a>',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
  },
  {id: 5,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
  },
  {id: 46,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
  },
  {id: 7,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    link: '<a href="https://github.com/akveo/blur-admin">Blur Admin</a>',
  }
];

  }
  ngOnInit() {
   
}
}

