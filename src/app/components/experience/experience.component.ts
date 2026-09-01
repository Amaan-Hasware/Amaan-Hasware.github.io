import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExpItem { bullet: string; }
interface ExpDomain { label: string; color: string; icon: string; points: ExpItem[]; }

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  domains: ExpDomain[] = [
    {
      label: 'Generative AI & Agentic AI Engineering',
      color: 'purple',
      icon: '',
      points: [
        { bullet: 'Integrated the Anthropic Claude API into a React + Flask full-stack application with live Smartsheet data ingestion, SSO authentication, and role-based access control — reducing development cycle time by 50%+.' },
        { bullet: 'Engineered production-grade prompting strategies at Deloitte — few-shot prompting, chain-of-thought reasoning, and tool-use / function-calling — ensuring consistently structured, high-quality AI outputs across client-facing pipelines.' },
        { bullet: 'Built LangChain-powered RAG (Retrieval-Augmented Generation) pipelines for internal document ingestion, semantic search, and intelligent retrieval — enabling AI systems to answer queries against live enterprise data.' },
        { bullet: 'Developed LangChain chatbots with guardrails for internal tooling — including input validation, output filtering, and fallback handling to ensure safe, reliable AI responses within business workflows.' },
        { bullet: 'Architected LangGraph-based agentic AI systems for enterprise workflow automation — designing multi-node StateGraphs with conditional routing, typed state management (TypedDict), audit logging through every node, and human-in-the-loop exception handling.' },
        { bullet: 'Built MCP (Model Context Protocol) server integrations enabling Claude to interface directly with GitHub — supporting push, pull, commit, and merge conflict resolution across agentic pipelines.' },
      ]
    },
    {
      label: 'Angular Development',
      color: 'blue',
      icon: '',
      points: [
        { bullet: 'Developed and deployed a responsive internal operations dashboard using Angular v16+ — modular architecture across 6–9 feature modules, role-based access for 20+ users, REST API integration, file upload, and interactive data visualisations via ngx-charts.' },
        { bullet: 'Built reusable Angular services for shared business logic and API handling — separating concerns cleanly across components, ensuring maintainability and ease of onboarding for other engineers.' },
        { bullet: 'Engineered the frontend layer of an AI full-stack application in React, consuming a Flask backend powered by the Claude API — including SSO login flow, live data views, and role-gated UI components.' },
      ]
    },
    {
      label: 'UiPath RPA Automation',
      color: 'cyan',
      icon: '',
      points: [
        { bullet: 'Developed 6–10 enterprise automation workflows using UiPath across SAP, NetSuite, Workday, Outlook, and Excel — deployed and managed via UiPath Orchestrator, reducing manual processing time by up to 5× on critical financial and operational tasks.' },
      ]
    },
  ];
}
