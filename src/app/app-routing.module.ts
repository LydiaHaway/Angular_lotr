import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PageAComponent } from './component/page-a/page-a.component';
import { CharactersListComponent } from './component/characters-list/characters-list.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'quotes',
    component: PageAComponent,
  },

  {
    path: 'characters',
    component: CharactersListComponent,
  },

  {
    path: 'form',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
