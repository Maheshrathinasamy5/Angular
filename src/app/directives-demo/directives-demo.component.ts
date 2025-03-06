import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-directives-demo',
  standalone: true, // Mark as a standalone component
  imports: [CommonModule], // Import CommonModule to use *ngIf and *ngFor
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent {
  isVisible = true;
  items = ['Item 1', 'Item 2', 'Item 3'];

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  
}
