import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import { fromEvent } from "rxjs";
import { map, throttleTime } from "rxjs/operators";

// add mouseclick interface here

@Component({
  selector: "demo",
  template: `
    <button>Click me</button>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class DemoComponent implements OnInit {
  ngOnInit(): void {
    const button: HTMLButtonElement = document.querySelector("button");
    // button.addEventListener("click", (e: MouseEvent) => console.log(e.clientX));

    // lets convert this to an observable


    // but why use observables? Seems more difficult
    // you can already see we are building sort of a "funnel" (trechter) where we get the data from the source (click) and get it down in the subscribe
  
    // the power comes from operators!
    // we have a stream in which we can transform the data in the way it is handled, used or looks like!

    // what if we we want to prevent button spamming? We are only interested in the click event every one second

    // using event listeners we need the following:
 

    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // button.addEventListener('click', (e: MouseEvent ) => {
    // if (Date.now() - lastClick >= rate) {
    //   lastClick = Date.now();
    //   console.log(e.clientX);
    // }
    // })

    // so alot of code for something "easy"

    // with observables we can extract only data we are interested in through this funnel
    // this is done by using .pipe() on the observable

    // now let's say we want to change the event into a custom object
    // lets define an interface --> mouseclicked
    // map needs to return a new observable
    // we can hard type the values ;)
  }
}
