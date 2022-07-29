import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LinksComponent } from './views/links/links.component';
import { ProjectsComponent } from './views/projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'links', component: LinksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
