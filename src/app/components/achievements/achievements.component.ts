import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  featured = {
    icon: 'heroTrophy',
    color: 'gold',
    title: 'Outstanding Award',
    issuer: 'Deloitte',
    year: '2024',
    description: 'Recognised for independently designing, building, and deploying an internal operations dashboard at Deloitte — used daily by 20+ team members for operational monitoring, task allocation, and workflow visibility. Built with Angular v16+, modular architecture, REST API integration, role-based access control, and interactive data visualisations via ngx-charts. Delivered end-to-end with full GitHub version control, transforming a manual coordination process into a self-serve tool that created measurable, lasting impact inside a global enterprise.',
    impact: '20+ daily active users · Replaced manual workflows · Delivered end-to-end solo',
    tags: ['Angular v16+', 'REST API', 'ngx-charts', 'RBAC'],
  };

  secondary = [
    {
      icon: 'heroStar',
      color: 'blue',
      title: 'Spot Award',
      issuer: 'Deloitte · 2024',
      description: 'Awarded for implementing UiPath automation on NetSuite financial workflows — cutting manual processing time from 5–7 minutes down to just 1 minute per task.',
      metric: '5× faster',
      tags: ['UiPath', 'NetSuite', 'RPA'],
    },
    {
      icon: 'heroRocketLaunch',
      color: 'purple',
      title: 'AI Full-Stack App',
      issuer: 'Key Project',
      description: 'Built a production React + Flask application powered by the Anthropic Claude API — live Smartsheet ingestion, SSO auth, role-based access. Cut dev cycle time by 50%+.',
      metric: '50%+ faster',
      tags: ['Claude API', 'React', 'Flask', 'SSO'],
    },
  ];
}
