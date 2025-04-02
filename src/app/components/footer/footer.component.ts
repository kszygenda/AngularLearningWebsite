import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  today_date : string | number = new Date().getFullYear().toString();
}
