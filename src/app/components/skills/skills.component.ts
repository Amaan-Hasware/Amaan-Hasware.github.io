import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

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
  imports: [CommonModule, NgIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    {
      title: 'AI & Generative Engineering',
      icon: 'heroSparkles',
      color: 'purple',
      bentoClass: 'cat-tall',
      description: 'Building production AI systems at Deloitte — integrating the Anthropic Claude API into full-stack applications, engineering advanced prompting strategies (few-shot, chain-of-thought, tool-use), and constructing MCP agentic pipelines that connect AI directly to live business data. Focused on shipping reliable, high-quality outputs in real enterprise environments.',
      skills: [
        { name: 'Claude / Anthropic API', icon: 'heroSparkles' },
        { name: 'Prompt Engineering',     icon: 'heroChatBubbleLeftRight' },
        { name: 'MCP Agentic Workflows',  icon: 'heroLink' },
        { name: 'Few-shot & CoT',         icon: 'heroCpuChip' },
        { name: 'Function Calling',       icon: 'heroCog6Tooth' },
        { name: 'Tool Use',               icon: 'heroWrenchScrewdriver' },
      ]
    },
    {
      title: 'Frontend & Frameworks',
      icon: 'heroBolt',
      color: 'blue',
      bentoClass: 'cat-normal',
      description: 'Modular Angular dashboards with REST APIs, RBAC, and data visualisations.',
      skills: [
        { name: 'Angular v16+',  devicon: 'devicon-angularjs-plain' },
        { name: 'React',         devicon: 'devicon-react-plain' },
        { name: 'TypeScript',    devicon: 'devicon-typescript-plain' },
        { name: 'HTML / CSS',    devicon: 'devicon-html5-plain' },
        { name: 'ngx-charts',    icon: 'heroChartBar' },
      ]
    },
    {
      title: 'Backend & Tools',
      icon: 'heroWrenchScrewdriver',
      color: 'green',
      bentoClass: 'cat-normal',
      description: 'REST APIs, Python services, and full GitHub version-controlled pipelines.',
      skills: [
        { name: 'Python',      devicon: 'devicon-python-plain' },
        { name: 'Flask',       devicon: 'devicon-flask-plain' },
        { name: 'REST APIs',   icon: 'heroLink' },
        { name: 'GitHub',      devicon: 'devicon-github-plain' },
        { name: 'Smartsheet',  icon: 'heroDocumentText' },
      ]
    },
    {
      title: 'RPA & Enterprise Automation',
      icon: 'heroArrowPath',
      color: 'cyan',
      bentoClass: 'cat-wide',
      description: '6–10 enterprise automation workflows deployed across SAP, NetSuite, Workday, Outlook, and Excel via UiPath Orchestrator.',
      skills: [
        { name: 'UiPath RPA',          icon: 'heroCpuChip' },
        { name: 'SAP Automation',      icon: 'heroBuildingOffice' },
        { name: 'NetSuite',            icon: 'heroBriefcase' },
        { name: 'Workday',             icon: 'heroClipboardDocumentList' },
        { name: 'UiPath Orchestrator', icon: 'heroAdjustmentsHorizontal' },
        { name: 'Excel / Outlook',     devicon: 'devicon-windows8-plain' },
      ]
    },
  ];
}
