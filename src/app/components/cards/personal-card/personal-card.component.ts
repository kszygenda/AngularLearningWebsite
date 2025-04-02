import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-personal-card',
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './personal-card.component.html',
  styleUrl: './personal-card.component.css'
})
export class PersonalCardComponent {

}
