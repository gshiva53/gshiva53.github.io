import { Component, Input } from '@angular/core';

@Component({
  selector: 'project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() title = ""; 
  @Input() description = "";
  @Input() tasks: {task: string}[] = [];  
}
