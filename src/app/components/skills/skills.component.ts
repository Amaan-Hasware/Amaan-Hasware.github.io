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
      title: 'Generative AI & LLM Engineering',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'Claude / Anthropic API' },
        { name: 'Prompt Engineering' },
        { name: 'Few-shot & Chain-of-Thought' },
        { name: 'Function Calling & Tool Use' },
        { name: 'RAG Pipelines' },
        { name: 'MCP Server Integration' },
      ]
    },
    {
      title: 'Agentic AI & LangChain/LangGraph',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'LangGraph' },
        { name: 'LangChain' },
        { name: 'StateGraph & TypedDict' },
        { name: 'Conditional Routing' },
        { name: 'Human-in-the-Loop' },
        { name: 'Agentic Workflow Automation' },
      ]
    },
    {
      title: 'Angular & Frontend',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'Angular v16+' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'RxJS' },
        { name: 'ngx-charts' },
        { name: 'HTML & SCSS' },
      ]
    },
    {
      title: 'Backend, Tools & RPA',
      icon: '', color: '', bentoClass: '',
      description: '',
      skills: [
        { name: 'Python' },
        { name: 'Flask & FastAPI' },
        { name: 'REST APIs' },
        { name: 'GitHub' },
        { name: 'UiPath RPA' },
        { name: 'UiPath Orchestrator' },
      ]
    },
  ];

  joinSkills(skills: Skill[]): string {
    return skills.map(s => s.name).join('  —  ');
  }
}
