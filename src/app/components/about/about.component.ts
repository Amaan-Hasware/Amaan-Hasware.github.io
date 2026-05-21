import { Component, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  counters = [
    { value: 0, target: 2,  suffix: '+', label: 'Years at Deloitte', icon: 'heroClock',  color: 'blue'   },
    { value: 0, target: 2,  suffix: '',  label: 'Awards Received',   icon: 'heroTrophy', color: 'gold'   },
    { value: 0, target: 20, suffix: '+', label: 'Users Served',      icon: 'heroUsers',  color: 'purple' },
  ];

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    const statsEl = document.querySelector('.bento-stats-group');
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(statsEl);
  }

  private animateCounters() {
    this.counters.forEach(counter => {
      let startTime: number | null = null;
      const duration = 1400;

      const update = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        this.zone.run(() => { counter.value = Math.floor(eased * counter.target); });

        if (progress < 1) requestAnimationFrame(update);
        else this.zone.run(() => { counter.value = counter.target; });
      };

      requestAnimationFrame(update);
    });
  }
}
