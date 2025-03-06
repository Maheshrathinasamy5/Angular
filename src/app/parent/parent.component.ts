import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component'; // Import ChildComponent

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent], // Add ChildComponent to imports
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = 'Hello my dear child!';
  childMessage = '';

  receiveMessage($event: string) {
    this.childMessage = $event; // Receive the message from child component
  }
}
