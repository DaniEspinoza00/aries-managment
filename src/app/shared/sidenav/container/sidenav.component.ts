import { Component, computed, Input, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { SidenavContentComponent } from '../content/sidenav-content.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule,SidenavContentComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  private _collapse = signal(false);  // Signal para collapsed
  
  collapseImg = false;
  @Input() set collapsed(value: boolean) { //5- catches the value of app.component.html
    this._collapse.set(value);  // Actualizar el signal
    this.collapseImg=value;
  }

  sidenavWidth = computed(() => this._collapse() ? '65px' : '250px');  // Usar el signal en computed


}
