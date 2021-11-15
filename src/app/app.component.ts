import { Component } from '@angular/core';
import Shoes from 'src/app/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shoes = Shoes();
}
