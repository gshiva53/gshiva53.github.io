import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  title1 = ".NET Application"
  description1 = "Application created for internship"
  pointers1 = "- Lorem Ipsum Lorem Ipsum Lorem Ipsum \n - Lorem Ipsum Lorem Ipsum Lorem Ipsum  \n ..." 
}
