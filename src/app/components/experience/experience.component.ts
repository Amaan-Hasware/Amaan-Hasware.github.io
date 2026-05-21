import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

interface ExpItem { bullet: string; }
interface ExpDomain { label: string; color: string; icon: string; points: ExpItem[]; }

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  domains: ExpDomain[] = [
    {
      label: 'Generative AI Engineering',
      color: 'purple',
      icon: 'heroSparkles',
      points: [
        { bullet: 'Integrated the Anthropic Claude API into a React + Flask full-stack app with live Smartsheet data ingestion, SSO authentication, and role-based access control — reducing dev cycle time by 50%+.' },
        { bullet: 'Engineered production-grade prompting strategies: few-shot prompting, chain-of-thought reasoning, and tool-use / function-calling for consistently high-quality AI outputs.' },
        { bullet: 'Built MCP (Model Context Protocol) server integrations enabling Claude to interface with GitHub for push, pull commit, and merge conflict resolution across agentic pipelines.' },
      ]
    },
    {
      label: 'Angular Development',
      color: 'blue',
      icon: 'heroBolt',
      points: [
        { bullet: 'Developed and deployed a responsive internal operations dashboard using Angular v16+ — modular architecture (6–9 modules), role-based access for 20+ users, REST API integration, file upload, and data visualisations via ngx-charts.' },
        { bullet: 'Built reusable Angular services for shared business logic and API handling; implemented ngIf and ngModel UI patterns with full GitHub version control throughout.' },
      ]
    },
    {
      label: 'UiPath RPA Automation',
      color: 'cyan',
      icon: 'heroArrowPath',
      points: [
        { bullet: 'Developed 6–10 enterprise automation workflows using UiPath across SAP, NetSuite, Workday, Outlook, and Excel; deployed and managed processes via UiPath Orchestrator.' },
        { bullet: 'Automated data extraction, email workflows, and financial calculations — significantly reducing operational manual effort across multiple business processes.' },
      ]
    },
  ];
}
