import { Component, Input } from '@angular/core';
import { MenuItem } from '../../../../../models/menu-item/MenuItem';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'

@Component({
  selector: 'app-content-element',
  standalone: true,
  imports: [MatListModule, MatIconModule],
  templateUrl: './content-element.component.html',
  styleUrl: './content-element.component.scss'
})
export class ContentElementComponent {
  @Input() menuItemsElement:MenuItem = {
    icon: "",
    label: "",
    route: ""
  }
}
