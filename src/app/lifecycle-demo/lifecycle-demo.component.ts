import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrls: ['./lifecycle-demo.component.css']
})
export class LifecycleDemoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() parentValue: string = '';  // Receiving value from parent component
  count = 0;

  constructor() {
    console.log('Constructor: Component created');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input property changed', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Component about to be destroyed');
  }

  increment() {
    this.count++;
    console.log(`Button clicked! Count: ${this.count}`);
  }
}
