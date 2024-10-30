import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { INav } from '../../../../core/interfaces/inav.interface';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {
  @Output() menuClosed = new EventEmitter<void>(); 

  arrNav: INav[] = [
    {
      title: 'Tecnologías',
      fragment: 'tecnologias',
      subItems: [
        { 
          name: 'Frontend',
          description: ['HTML5', 'CSS3', 'JavaScript', 'Angular'],
          icon: 'assets/icons/logo-frontend.svg'
        },
        { 
          name: 'Backend', 
          description: ['Node.js', 'Express.js', 'MySQL', 'MongoDB'],
          icon: 'assets/icons/logo-backend.svg'
        },
        { 
          name: 'Herramientas y DevOps', 
          description: ['Git y GitHub', 'Docker', 'TDD', 'CI/CD'],
          icon: 'assets/icons/logo-tools.svg'
        }
      ]
    },
    {
      title: 'Proyectos',
      fragment: 'proyectos',
      subItems: [
        { name: 'Subitem X' },
        { name: 'Subitem Y' },
        { name: 'Subitem Z', description: ['Sub-subitem Za'] }
      ]
    },
    {
      title: 'Formación',
      fragment: 'formacion',
      subItems: [
        { 
          name: 'Máster en Desarrollo Full Stack', 
        },
        { 
          name: 'Curso en Diseño y Estructura (HTML/CSS)', 
        },
        { 
          name: 'Técnico Superior en Informática y Telecomunicaciones', 
        }
      ]
    }
  ];

  onLinkClick() {
    this.menuClosed.emit();  // Emitir evento para cerrar el menú
  }
}
