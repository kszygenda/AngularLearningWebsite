import {Component, inject, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { MatDividerModule } from '@angular/material/divider';
import {NAV_ICONS} from './nav-icons';
import { map, shareReplay } from 'rxjs/operators';
import {Router, RouterModule} from '@angular/router';
import {MatCard} from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';

function getRouteTitle(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
console.log(Router);
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterModule,
    FooterComponent
  ]
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  @ViewChild('drawer') drawer!: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  drawerOpened: boolean = false;

  routes = this.router.config
    .filter(item => item.path)
    .map(item => ({
      path: item.path,
      title: getRouteTitle(item.path ?? ''),
      icon: NAV_ICONS[item.path ?? '']
    }));
  toggleDrawer(): void {
    this.drawerOpened = !this.drawerOpened;
    console.log('drawer state:',this.drawerOpened);
  }

}
