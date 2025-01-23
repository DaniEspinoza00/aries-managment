import { Component } from '@angular/core';
import { TableComponent } from '../../../components/inventory/data-table/table/table.component';
import { enrichedUsers, users } from '../persona.model';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.scss'
})
export class PersonaComponent {
  displayedColumns=['id','firstName','lastName','editar'];
  data=enrichedUsers;
}
