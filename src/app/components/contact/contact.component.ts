import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  year = new Date().getFullYear();

  links = [
    {
      label: 'Email',
      value: 'haswareamaan2003@gmail.com',
      href: 'mailto:haswareamaan2003@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/amaan-hasware-22630221b',
      href: 'https://www.linkedin.com/in/amaan-hasware-22630221b',
    },
    {
      label: 'GitHub',
      value: 'github.com/Amaan-Hasware',
      href: 'https://github.com/Amaan-Hasware',
    },
  ];
}
