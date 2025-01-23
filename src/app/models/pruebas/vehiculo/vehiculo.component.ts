import { Component } from '@angular/core';
import { vehicles } from '../vehiculo.model';
import { TableComponent } from '../../../components/inventory/data-table/table/table.component';

@Component({
  selector: 'app-vehiculo',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './vehiculo.component.html',
  styleUrl: './vehiculo.component.scss'
})
export class VehiculoComponent {
  displayedColumns=['id','brand','model','year','editar'];
  data=vehicles;

}
