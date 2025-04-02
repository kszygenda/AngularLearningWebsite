// contact-card.component.ts
import { Component } from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from "@angular/material/card";
import {MatList, MatListItem} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-contact-card',
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
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {
  contactInfo = [
    { icon: 'email', text: 'kszygenda12@gmail.com', link: 'mailto:kszygenda12@gmail.com' },
    { icon: 'phone', text: '+48 660 599 699', link: 'tel:+48660599699' },
    { icon: 'link', text: 'LinkedIn', link: 'https://linkedin.com/in/kszygenda' },
    { icon: 'code', text: 'GitHub', link: 'https://github.com/kszygenda' }
  ];
}
