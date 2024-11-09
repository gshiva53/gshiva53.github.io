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
  title1 = "Notifications to MS Teams"
  description1 = "ObjectScript Application for Health care providers | Internship Project"
  tasks1: { task: string}[] = [
    { task: "Demonstrated experience in working with Intersystems’ IRIS platform using ObjectScript and implementing unit, UAT testing." }, 
    { task: "Conducted thorough documentation, ensuring comprehensive records of project activities and processes." }, 
    { task: "Demonstrated the ability to independently research and comprehend complex systems by reading documentation." }, 
    { task: "Collaborated with external language servers to integrate Microsoft’s Authentication Library into Python applications using ObjectScript." }, 
    { task: "Fostered a collaborative and inclusive team environment by actively sharing knowledge and contributing ideas during team discussions."},
    { task: "Demonstrated an agile mindset, continuously refining strategies and approaches to accommodate evolving project needs."},
    { task: "Invested in self-directed learning to build a strong technical foundation and took the initiative to proactively expand technical skills and knowledge."},
  ]; 

  title2 = "Natural Language to SQL";
  description2 = "AI Assistant for Electronic Medical Record (EMR) software using GPT-4 | Internship Project"; 
  tasks2: { task: string}[] = [
    { task: "Designed and developed prototypes using Figma that clearly communicated project requirements, scope and user experience. " }, 
    { task: "Researched using scholarly articles, peer-reviewed literature, academic papers and industry blogs to implement the natural language to SQL conversion using Open AI’s GPT4 foundational model." }, 
    { task: "Conducted comprehensive testing of AI assistant using OpenAI's Evals library and LangChain framework, focusing on performance metrics such as accuracy, relevance, and coherence. " }, 
    { task: "Applied the agile methodology to develop software with daily stand-up meetings, sprint planning meetings, sprint retrospective meetings." }, 
    { task: "Documented research, findings, insights, successful pathways, and failures to share knowledge amongst the team." }, 
  ]; 
}
