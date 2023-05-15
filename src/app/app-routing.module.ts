import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffersComponent } from './offers/offers.component';
import { ProductaComponent } from './producta/producta.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"user",component:UserComponent},
  {path:"not-found",component:NotFoundComponent},
  {path:"offers",component:OffersComponent},
  {path:"product",component:ProductaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
