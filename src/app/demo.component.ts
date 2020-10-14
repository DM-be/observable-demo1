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

interface MouseClick {
  x: number;
  y: number;
}

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
    button.addEventListener("click", (e: MouseEvent) => console.log(e.clientX));

    // lets convert this to an observables

    // but why use observables? Eventlisteners do the same thing?
    // the power comes from operators!
    // we have a stream that we can manipulate to our every needs using operators

    // what if we are only interested in in a mouse click event every 1 second?
    // using event listeners we need the following:
    // (don't forget to remove the previous event listener)

    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // button.addEventListener('click', (e: MouseEvent ) => {
    // if (Date.now() - lastClick >= rate) {
    //   lastClick = Date.now();
    //   console.log(e.clientX);
    // }
    // })

    // so alot of code for something relatively easy
    // with observables we can view the events as a stream we can "funnel"
    // we can extract only data we are interested in through this funnel
    // this is done by using .pipe() method on the observable

    // now let's say we want to change the event into a custom object
    // lets define an interface --> mouseclicked
    // map needs to return a new observable
    // we can hard type the values ;)
  }
}
