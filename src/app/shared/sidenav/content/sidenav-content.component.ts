import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule, NgFor } from '@angular/common';
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
}
