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
import {cards} from './projects-list';

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
    MatCardImage,
  ],
  standalone: true,
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  protected readonly cards = cards;
  i: number = 0;
  get selected_card() {
    return cards[this.i];
  }
  goUpSelected(){
    this.i = this.i == 2 ? this.i + 1 : this.i;
  }
  goDownSelected(){
    this.i = this.i == 0 ? 0 : this.i - 1;
  }
}
