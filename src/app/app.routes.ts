import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SalesComponent } from './components/sales/sales.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PersonaComponent } from './models/pruebas/persona/persona.component';
import { VehiculoComponent } from './models/pruebas/vehiculo/vehiculo.component';
import { BooksComponent } from './components/books/books.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'home', component:HomeComponent},
    {path:'inventory', component:BooksComponent},
    {path:'sales', component:PersonaComponent},
    {path:'contacts', component:VehiculoComponent}
];
