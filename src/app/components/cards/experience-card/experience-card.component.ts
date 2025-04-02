import { Component } from '@angular/core';
import {
    MatCard,
    MatCardContent,
    MatCardTitle,
} from "@angular/material/card";
import {MatList, MatListItem} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-experience-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatList,
    MatListItem,
    MatIconModule,
    NgForOf
  ],
  standalone: true,
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.css'
})
export class ExperienceCardComponent {
  experiencePoints: string[] = [
    "Designed and implemented Three.js solutions for industrial processes visualisations",
    "Designed and implemented front-end and back-end solutions for internal project",
    "Collaborated within a team of 5 using Git, Jira and Confluence",
    "Actively enhanced and optimized already existing solutions",
    "Updated solutions to newer technology versions"
  ];

}
