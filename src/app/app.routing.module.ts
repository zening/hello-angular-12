import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

import { HelloComponent } from './hello.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'alertdialog', component: AlertDialogComponent },
  // { path: 'heroes', component: HeroesComponent },
  // { path: 'hero/:id', component: HeroDetailsComponent },
  { path: '', redirectTo: '/hello', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
