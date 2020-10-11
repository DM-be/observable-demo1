import { AfterViewInit, Component, ElementRef,  Input, OnInit,  ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';


interface MouseClick {
  x: number;
  y: number;
}



@Component({
  selector: 'demo',
  template: ` <button >Click me</button>`,
  styles: [`h1 { font-family: Lato; }`]
})


export class DemoComponent implements OnInit {


  ngOnInit(): void {
    const button: HTMLButtonElement = document.querySelector('button');
   // button.addEventListener('click', (e: MouseEvent) => console.log(e.clientX))
    // now with an observable

   // fromEvent(button, 'click').subscribe((e: MouseEvent) => console.log(e.clientX) )

    // but why use observables? We have eventlisteners so...
    // the power comes from operators!
    // we have a stream that we can manipulate to our every needs using operators
    

    // we are only interested in in a mouse click event every 1 second
    // using event listeners: 

    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // button.addEventListener('click', (e: MouseEvent ) => {
    // if (Date.now() - lastClick >= rate) {
    //   lastClick = Date.now();
    //   console.log(e.clientX);
      
    
    // }

    // so alot of code for something relatively easy
    // with observables we can view the events as a stream we can "funnel"
    // we can extract only data we are interested in through this funnel
    // this is done by using .pipe() method on the observable
    const observable = fromEvent(button, 'click');
    observable.pipe(
      throttleTime(1000)
      ).subscribe((e: MouseEvent) => console.log(e))

    // now let's say we want to change the event into a custom object
    // lets define an interface --> mouseclicked
    // map needs to return a new observable
    // we can hard type the values ;)

    fromEvent(button, 'click').pipe(
      throttleTime(1000),
      map((e: MouseEvent) => {
        return {
          x: e.clientX,
          y: e.clientY,
        } as MouseClick
      }) 
    ).subscribe((mouseClickEveryOneSecond: MouseClick) => console.log(mouseClickEveryOneSecond))



  }

  
    

  
}
