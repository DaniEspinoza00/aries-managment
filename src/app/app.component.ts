import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidenavComponent } from './shared/sidenav/container/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aries-stock-manager';

  isSidenavCollapsed = false;

  onToggleSidenav(collapsed: boolean) {
    this.isSidenavCollapsed = collapsed; //3-change the value 
  }
}
