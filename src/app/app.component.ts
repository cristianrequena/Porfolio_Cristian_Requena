import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TrainingComponent } from './components/training/training.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TechnologiesComponent, ProjectsComponent, TrainingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio Cristian Requena';
}
