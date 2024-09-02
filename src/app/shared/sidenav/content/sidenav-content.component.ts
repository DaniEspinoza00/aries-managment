import { Component, computed, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { menuItem } from '../../../models/menu-item/MenuItem.model';
import { ContentElementComponent } from './content-element/content-element/content-element.component';

@Component({
  selector: 'app-sidenav-content',
  standalone: true,
  imports: [MatListModule, MatIconModule, ContentElementComponent],
  templateUrl: './sidenav-content.component.html',
  styleUrl: './sidenav-content.component.scss'
})
export class SidenavContentComponent {
  
  menuItems = menuItem;
  private sideNavCollapsed = signal(false);
  isCollapsed = false;

  @Input() set collapseImg(val: boolean) {
    this.isCollapsed=val;
    this.sideNavCollapsed.set(val);
  }

   //sidenav elements name, routes an name icons

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
