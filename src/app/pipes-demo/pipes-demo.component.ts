import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '../reverse.pipe'; // Import Custom Pipe

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, ReversePipe], // Include ReversePipe
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  currentDate = new Date();
}
