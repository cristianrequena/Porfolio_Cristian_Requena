import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {
  tabs = [
    { 
      name: 'Frontend', 
      images: [
        { src: '../../../assets/logos/Angular.png', alt: 'Angular' },
        { src: '../../../assets/logos/Javascript.png', alt: 'Javascript' },
        { src: '../../../assets/logos/HTML5.png', alt: 'HTML5' },
        { src: '../../../assets/logos/CSS3.png', alt: 'CSS3' }
      ]
    },
    { 
      name: 'Backend', 
      images: [
        { src: '../../../assets/logos/Node.js.png', alt: 'NodeJs' },
        { src: '../../../assets/logos/MongoDB.png', alt: 'MongoDB' },
        { src: '../../../assets/logos/MySQL.png', alt: 'MySQL' }
      ]
    },
    { 
      name: 'Herramientas y DevOps', 
      images: [
        { src: '../../../assets/logos/Git.png', alt: 'Git' },
        { src: '../../../assets/logos/GitHub-white.png', alt: 'GitHub' }
      ]
    }
  ];

  selectedIndex = 0;

  // Cambiar pestaña con un solo método
  changeTab(direction: number): void {
    this.selectedIndex = (this.selectedIndex + direction + this.tabs.length) % this.tabs.length;
  }
}