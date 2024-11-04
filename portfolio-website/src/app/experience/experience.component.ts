import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  @Input() position = ""; 
  @Input() time = ""; 
  @Input() company = ""; 
}