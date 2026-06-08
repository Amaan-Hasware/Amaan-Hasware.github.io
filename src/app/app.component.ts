import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    AchievementsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  year = new Date().getFullYear();

  ngOnInit() {
    // Small delay so Angular has rendered the DOM
    setTimeout(() => {
      this.initBlurReveal();
      this.initSectionAmbient();
    }, 120);
  }

  // Blur-to-sharp reveal for .reveal and .rule-draw elements
  private initBlurReveal() {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .rule-draw').forEach(el => {
      revealObs.observe(el);
    });
  }

  // Section ambient spotlight: active section = full opacity, rest = dimmed
  private initSectionAmbient() {
    const sections = Array.from(document.querySelectorAll('section'));
    if (sections.length === 0) return;

    let hasScrolled = false;

    // Only activate ambient dimming after the user starts scrolling
    window.addEventListener('scroll', () => { hasScrolled = true; }, { once: true, passive: true });

    const ambientObs = new IntersectionObserver(
      (entries) => {
        if (!hasScrolled) return;

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Dim every section, then undim the newly active one
            sections.forEach(s => s.classList.add('section-dim'));
            entry.target.classList.remove('section-dim');

            // Highlight the section index label inside the active section
            document.querySelectorAll('.section-index').forEach(idx => idx.classList.remove('index-active'));
            const activeIndex = entry.target.querySelector('.section-index');
            if (activeIndex) activeIndex.classList.add('index-active');
          }
        });
      },
      {
        // Trigger when section enters the centre 60% of the viewport
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0,
      }
    );

    sections.forEach(s => ambientObs.observe(s));
  }
}
