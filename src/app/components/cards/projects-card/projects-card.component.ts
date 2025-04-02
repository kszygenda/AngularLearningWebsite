import { Component } from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from "@angular/material/card";
import {MatList, MatListItem} from '@angular/material/list';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {NgForOf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-projects-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatIcon,
    MatIconModule,
    MatList,
    MatListItem,
    NgForOf,
    MatButtonModule,
    MatCardImage
  ],
  standalone: true,
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {

}
