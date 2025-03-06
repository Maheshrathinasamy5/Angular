import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childMessage: string = '';  // ✅ Accepts data from parent
  @Output() messageEvent = new EventEmitter<string>();  // ✅ Sends data to parent

  sendMessage() {
    this.messageEvent.emit('Hello mom!'); // ✅ Emit message to parent
  }
}
