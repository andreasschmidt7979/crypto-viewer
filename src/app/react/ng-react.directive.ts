import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import { ComponentProps, createElement, ElementType } from 'react';
import {createRoot, Root} from 'react-dom/client';

@Directive({
  standalone: true,
  selector: '[ngReact]'
})
export class NgReactDirective implements OnDestroy {
  @Input() set ngReact(path: string) {
    import(`${path}`)
      .then((comp) => this.root.render(comp.default()))
      .catch((e) => console.error(`Error while importing ${path}, Error: ${e}`));
  }

  private root: Root;

  constructor(private elm: ElementRef) {
    console.log("test");
     this.root = createRoot(elm.nativeElement);
     console.log("test2");
    //  console.log('NgReactDirective initialized', this.root);
  }

  ngOnDestroy(): void {
    this.root.unmount();
  }
}