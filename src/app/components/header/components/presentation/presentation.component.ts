import { Component } from '@angular/core';
import { FormEmailComponent } from './components/form-email/form-email.component';
import { FooterComponent } from "../../../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [FormEmailComponent, FooterComponent, CommonModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  mostrarPopup = false;

  abrirPopup() {
    this.mostrarPopup = true;
  }

  cerrarPopup() {
    this.mostrarPopup = false;
  }
}
