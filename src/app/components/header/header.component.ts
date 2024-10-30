import { Component } from '@angular/core';
import { HeaderNavComponent } from "./components/header-nav/header-nav.component";
import { PresentationComponent } from './components/presentation/presentation.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderNavComponent, PresentationComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
