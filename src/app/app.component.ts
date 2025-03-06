import { Component } from '@angular/core';
import { DirectivesDemoComponent } from "./directives-demo/directives-demo.component";
import { CustomDirectiveDemoComponent } from "./custom-directive-demo/custom-directive-demo.component";
import { PipesDemoComponent } from "./pipes-demo/pipes-demo.component";
import { ParentComponent } from './parent/parent.component';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DirectivesDemoComponent,
    CustomDirectiveDemoComponent,
    PipesDemoComponent,
    ParentComponent,
    LifecycleDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
