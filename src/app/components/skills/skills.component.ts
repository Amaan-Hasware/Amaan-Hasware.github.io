import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill { name: string; devicon?: string; icon?: string; }
interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  bentoClass: string;
  description: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'AI & Generative Engineering',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'Claude / Anthropic API' },
        { name: 'Prompt Engineering' },
        { name: 'MCP Agentic Workflows' },
        { name: 'Few-shot & Chain-of-Thought' },
        { name: 'Function Calling' },
        { name: 'Tool Use' },
      ]
    },
    {
      title: 'Frontend & Frameworks',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'Angular v16+' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'HTML & CSS' },
        { name: 'ngx-charts' },
        { name: 'RxJS' },
      ]
    },
    {
      title: 'Backend & Tools',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'Python' },
        { name: 'Flask' },
        { name: 'REST APIs' },
        { name: 'GitHub' },
        { name: 'Smartsheet' },
        { name: 'SSO & RBAC' },
      ]
    },
    {
      title: 'RPA & Enterprise Automation',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'UiPath RPA' },
        { name: 'SAP' },
        { name: 'NetSuite' },
        { name: 'Workday' },
        { name: 'UiPath Orchestrator' },
        { name: 'Excel & Outlook' },
      ]
    },
  ];

  joinSkills(skills: Skill[]): string {
    return skills.map(s => s.name).join('  —  ');
  }
}
