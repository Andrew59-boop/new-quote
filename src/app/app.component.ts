import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote('drew','kill bill','Mr Smith',new Date(2019,1,7)),
    new Quote('bill','worship God','tell the truth',new Date(2019,1,7)),
    new Quote('asena','maiden','did he cum',new Date(2019,1,7)),
    new Quote('kratos','champ','smoke smoke smoke',new Date(2019,1,7)),
    new Quote('thanos','creed','bake sale',new Date(2019,1,7)),

  ];
  

    constructor() { }
  
    ngOnInit() {
    }
  
  }