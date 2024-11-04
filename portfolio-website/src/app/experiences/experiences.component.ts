import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    ExperienceComponent
  ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  position1 = "Waste Auditor"; 
  time1 = "July-2xxx July-2xxx"; 
  company1 = "EC Sustainable Pty. Ltd.";
}