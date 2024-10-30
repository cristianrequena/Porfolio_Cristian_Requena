import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    // Seleccionamos los elementos con las clases "project-image2" y "proyect-description"
    const imageElement = this.el.nativeElement.querySelector('.project-image2');
    const descriptionElement = this.el.nativeElement.querySelector('.project-description');
  
    // Creamos el Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');  // Mostrar el elemento al hacer scroll
        } else {
          entry.target.classList.remove('visible');  // Ocultar el elemento al hacer scroll hacia arriba
        }
      });
    }, {
      rootMargin: '-50px 0px -300px 0px', // Margen de 3rem (48px) para arriba y abajo
      threshold: 0 // Aplica cuando cualquier parte del elemento es visible
    });
  
    // Empezamos a observar los elementos seleccionados
    if (imageElement) observer.observe(imageElement);
    if (descriptionElement) observer.observe(descriptionElement);
  }
}  
