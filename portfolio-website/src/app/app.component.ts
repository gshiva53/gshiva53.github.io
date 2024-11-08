import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { BackgroundComponent } from './background/background.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IntroComponent,
    BackgroundComponent,
    ExperienceComponent,
    ExperiencesComponent,
    SkillsComponent,
    ProjectComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-website';
}
