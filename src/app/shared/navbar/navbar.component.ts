import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { SidenavComponent } from '../sidenav/container/sidenav.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    @Output() toggleSidenav = new EventEmitter<boolean>();
    isToggled: boolean = false;
  
    toggle(): void {
      this.isToggled = !this.isToggled;
      this.toggleSidenav.emit(this.isToggled);//1 emit a new result
    }

}
