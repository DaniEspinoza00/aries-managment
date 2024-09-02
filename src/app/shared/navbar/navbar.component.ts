import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RouterLink } from '@angular/router';
import { ContentElementComponent } from '../sidenav/content/content-element/content-element/content-element.component';
import { MatNavList } from '@angular/material/list';
import { menuItem } from '../../models/menu-item/MenuItem.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatNavList, RouterLink, ContentElementComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    menuItems = menuItem;

    @Output() toggleSidenav = new EventEmitter<boolean>();
    isToggled: boolean = false;
  
    toggle(): void {
      this.isToggled = !this.isToggled;
      this.toggleSidenav.emit(this.isToggled);//1 emit a new result
    }

}
