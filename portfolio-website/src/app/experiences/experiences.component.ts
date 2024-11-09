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
  position1 = "Data Entry Officer"; 
  time1 = "July-22024 - Current"; 
  company1 = "Department of Health (DoH) in Northern Territory Government (NTG)"; 
  duties1: {duty:string}[] = [
    { duty: "Conducted 10-15 patient interviews a day and accurately entered sensitive patient information into CareSys and Acacia while adhering to strict data privacy regulations." },
    { duty: "Thrived under pressure and successfully managed complex data entry responsibilities in the high-stress environment of the Palmerston Regional and Royal Darwin Hospital emergency departments."},
    { duty: "Maintained meticulous attention to detail to ensure data integrity and consistency across multiple systems." },
    { duty: "Successfully navigated and utilized two electronic patient record systems, namely, Caresys and Acacia to support patient care." },
    { duty: "Collaborated with team leaders and administration manager for the development of data entry workflows and processes to improve efficiency and accuracy."}
  ];

  position2 = ".NET Tutor"; 
  time2 = "July 2024 - Nov 2024"; 
  company2 = "Charles Darwin University (CDU)"; 
  duties2: {duty:string}[] = [
    { duty: "Fostered a collaborative learning environment by conducting workshops, organising meetings, forming student groups, arranging one-to-one support sessions and round-robin discussions."}, 
    { duty: "Helped in student comprehension of technical and business documentation through instruction and guidance."},
    { duty: "Contributed to troubleshooting and problem-solving efforts, assisting students in identifying and resolving technical issues."},
    { duty: "Conducted 60 student interviews in 4 weeks to assess understanding, provide feedback, and identify areas for improvement."},
    { duty: "Simplified complex .NET concepts and technologies into understandable terms for non-technical learners."},
    { duty: "Conducted interactive workshops, lectures, and hands-on exercises to facilitate effective knowledge transfer."},
  ];

  position3 = "Intern"; 
  time3 = "Dec 2022 - March 2023"; 
  company3 = "InterSystems"; 

  position4 = "Intern";
  time4 = "Dec 2023 - Feb 2024";
  company4 = "InterSystems"; 
  duties4: { duty: string }[] = [
    {duty: "Collaborated and communicated with technical and business mentors and staff members to successfully complete the project within the internship duration."}, 
    {duty: "Presented the project outcomes and findings to a panel of senior leadership, effectively communicating complex technical concepts."},
    {duty: "Maintained 100% attendance and demonstrated commitment to the Internship Program by attending all training and project-related activities."},
    {duty: "Completed all required assessment activities including but not limited to, weekly progress reports, fortnightly HR meetings associated with the internship."},
    {duty: "Presented the project outcomes and findings to a panel of senior leadership, effectively communicating complex technical concepts."},
    {duty: "Upheld the highest standards of confidentiality, safeguarding sensitive information pertaining to InterSystems, its employees, and clients."},
    {duty: "Interacting professionally with stakeholders using excellent communication skills, both oral and written to gather requirements."},
    {duty: "Worked within a cross functional and multi-cultural team and successfully delivered the project."},
  ];

  position5 = "Sales Data Analyst and Report Developer"; 
  time5 = "Sept 2019 – Dec 2020"; 
  company5 = "Jaadu LED Lighting Solutions Pty Ltd"; 
  duties5: {duty: string}[] = [
    { duty: "Extracted data from databases, CRM system and spreadsheets and cleaned it for analysis. " }, 
    { duty: "Created Power BI dashboards to track key performance indicators (KPIs) for call centre and door-to-door sales teams in the Victorian Energy Upgrades (VEU) program for various suburbs in Melbourne, Victoria." }, 
    { duty: "Monitored and reported individual and team sales performance against established KPIs to support incentive and commission calculations." }, 
    { duty: "Developed clear and informative data visualisation to tell compelling stories about sales trends." }, 
    { duty: "Contributed to the development and implementation of business intelligence solutions to support sales decision-making. " }, 
    { duty: "Provided data-driven insights to sales teams to help them optimise their strategies and improve performance." }, 
    { duty: "Collaborated and communicated clearly with other departments and presented findings to stakeholders at all levels." }, 
  ]; 
}
