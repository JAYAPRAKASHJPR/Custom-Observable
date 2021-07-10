import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { AppObservable } from './app.observable';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor() {
    const check$ = new AppObservable(cust => {
      cust.next('JP custom');
      cust.next('Jay custom');
    });
    check$.subscribe(a => {
      console.log('a.' + a);
    });
    check$.subscribe(b => {
      console.log('b.' + b);
    });
    const test$ = new Observable(sub => {
     
      sub.next('JP');
     
      sub.next('Jay');
    });
    test$.subscribe(x => {
      console.log('1. ' + x);
    });
    test$.subscribe(y => {
      console.log('2. ' + y);
    });
  }
}
