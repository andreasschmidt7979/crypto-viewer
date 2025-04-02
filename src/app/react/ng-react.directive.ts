import OtherComponent from "./hello-react-world";
import angular from "angular";
import React, { Component } from "react";
import { react2angular } from "react2angular"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

class HelloComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: this.props.balls
    };
  }
  render() {
    const { balls, nickname } = this.props;
    return (
      <div>
        <OtherComponent nickname={"Lio"} balls={balls} />
        <h1>i am: {nickname} balls</h1>
        <p>{this.state.balls}</p>
        <button
          type="button"
          name="balls"
          onClick={() => this.setState({ balls: this.state.balls + 1 })}
        >
          click
        </button>
      </div>
    );
  }
}
app.component(
  "helloComponent",
  react2angular(HelloComponent, ["nickname", "balls"], ["$http"])
);


// import angular from 'angular'
// import { react2angular } from 'react2angular'
 
// angular
//   .module('myModule', [])
//   .component('myComponent', react2angular(MyComponent, ['fooBar', 'baz']))


// import {Directive, ElementRef, Input, inject} from '@angular/core';
// import { ComponentProps, createElement, ElementType } from 'react';
// import {createRoot} from 'react-dom/client';


// @Directive({
//   selector: '[reactComponent]',
//   standalone: true,
// })
// export class ReactComponentDirective<Comp extends ElementType> {
//   @Input()
//   reactComponent!: Comp;
//   @Input()
//   props!: ComponentProps<Comp>;

//   private root = createRoot(inject(ElementRef).nativeElement)

//   ngOnChanges() {
//     this.root.render(createElement(this.reactComponent, this.props))
//     console.log("test");
//   }

//   ngOnDestroy() {
//     this.root.unmount();
//   }

// }


// @Directive({
//   selector: '[ngReact]'
//   standalone: true,
// })
// export class NgReactDirective implements OnDestroy {
//   @Input() set ngReact(path: string) {
//     import(`${path}`)
//       .then((comp) => this.root.render(comp.default()))
//       .catch((e) => console.error(`Error while importing ${path}, Error: ${e}`));
//   }

//   private root: Root;

//   constructor(private elm: ElementRef) {
//     console.log("test");
//      this.root = createRoot(elm.nativeElement);
//      console.log("test2");
//     //  console.log('NgReactDirective initialized', this.root);
//   }

//   ngOnDestroy(): void {
//     this.root.unmount();
//   }
// }