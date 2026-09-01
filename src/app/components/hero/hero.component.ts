import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = [
    'agentic AI systems',
    'LangGraph workflows',
    'RAG pipelines',
    'enterprise AI applications',
    'Angular dashboards',
  ];

  displayText = '';
  currentIndex = 0;
  isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() { this.type(); }
  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }

  private type() {
    const current = this.roles[this.currentIndex];
    if (!this.isDeleting) {
      this.displayText = current.slice(0, this.displayText.length + 1);
      if (this.displayText === current) {
        this.timer = setTimeout(() => { this.isDeleting = true; this.type(); }, 2200);
        return;
      }
    } else {
      this.displayText = current.slice(0, this.displayText.length - 1);
      if (this.displayText === '') {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.type(), this.isDeleting ? 55 : 95);
  }
}
