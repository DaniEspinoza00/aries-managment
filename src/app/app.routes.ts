import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { SalesComponent } from './components/sales/sales.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'home', component:HomeComponent},
    {path:'inventory', component:InventoryComponent},
    {path:'sales', component:SalesComponent},
    {path:'contacts', component:ContactsComponent}
];
