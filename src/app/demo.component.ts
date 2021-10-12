import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, scan, throttleTime } from 'rxjs/operators';

// add mouseclick interface here

@Component({
  selector: 'demo',
  template: `
    <button>Click me</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `,
  ],
})
export class DemoComponent implements OnInit {

  ngOnInit(): void {
    const button: HTMLButtonElement = document.querySelector('button');
    //  button.addEventListener("click", (e: MouseEvent) => console.log(e.clientX));

    // lets convert this to an observable

    // but why use observables? Seems more difficult??
    // you can already see we are building sort of a "funnel" where we get the data from the source (click) and pass it down

    // operators: transform the data as we see fit!

    // what if we we want to count button clicks but prevent spamming? We are only interested in the click event every one second

    // using event listeners we need the following:

    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // button.addEventListener('click', (e: MouseEvent ) => {
    // if (Date.now() - lastClick >= rate) {
    //   lastClick = Date.now();
    //   console.log(`clicked ${++count} times`);
    // }
    // })

    // so alot of code for something "easy"

    // with observables we can extract only data we are interested in through this funnel
    // this is done by using .pipe() and applying operators on the observable

    // scan and throttleTime!

    // now let's say we want to change the event into a custom object
    // lets define an interface --> mouseclicked
    // map needs to return a new observable
    // we can hard type the values with an interfaces
  }
}
