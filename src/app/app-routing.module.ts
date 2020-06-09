import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: PreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
