import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  links = [
    {
      icon: 'heroEnvelope',
      label: 'Email',
      value: 'haswareamaan2003@gmail.com',
      href: 'mailto:haswareamaan2003@gmail.com',
      color: 'blue',
    },
    {
      icon: 'simpleLinkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/amaan-hasware-22630221b',
      href: 'https://www.linkedin.com/in/amaan-hasware-22630221b',
      color: 'blue',
    },
    {
      icon: 'simpleGithub',
      label: 'GitHub',
      value: 'github.com/Amaan-Hasware',
      href: 'https://github.com/Amaan-Hasware',
      color: 'purple',
    },
  ];
}
