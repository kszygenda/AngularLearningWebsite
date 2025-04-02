import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {ContactCardComponent} from '../../components/cards/contact-card/contact-card.component';
import {ExperienceCardComponent} from '../../components/cards/experience-card/experience-card.component';
import {PersonalCardComponent} from '../../components/cards/personal-card/personal-card.component';
import {ProjectsCardComponent} from '../../components/cards/projects-card/projects-card.component';

@Component({
  selector: 'app-home-page',
  imports: [
    MatGridListModule,
    ContactCardComponent,
    ExperienceCardComponent,
    PersonalCardComponent,
    ProjectsCardComponent,
  ],
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
