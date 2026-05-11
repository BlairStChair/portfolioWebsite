import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PatternComponent } from "./components/pattern/pattern.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, EducationComponent, SkillsComponent, FooterComponent, PatternComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
