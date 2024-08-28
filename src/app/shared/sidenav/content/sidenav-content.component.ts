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

  private sideNavCollapsed = signal(false);
  isCollapsed = false;

  @Input() set collapseImg(val: boolean) {
    this.isCollapsed=val;
    this.sideNavCollapsed.set(val);
  }

  menuItems = menuItem;

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
