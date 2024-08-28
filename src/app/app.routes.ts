import { ContentComponent } from './components/content/content.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'home', component:HomeComponent},
    {path:'dashboard', component:DashboardComponent},
    {path:'content', component:ContentComponent},
    {path:'comments', component:CommentsComponent},
    {path:'analytics', component:AnalyticsComponent}
];
