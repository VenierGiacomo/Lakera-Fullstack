import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparisonPageComponent } from './pages/comparison-page/comparison-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';


const routes: Routes = [

    {path: '', component: OverviewPageComponent, },
    {path: 'comparison', component: ComparisonPageComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
