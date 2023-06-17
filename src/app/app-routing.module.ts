import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { CollegeComponent } from './college/college.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotesComponent } from './notes/notes.component';
import { AirenComponent } from './airen/airen.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'school',component:SchoolComponent
  },
  {
    path:'',component:AcecraftComponent
  },
  {
    path:'college',component:CollegeComponent
  },
  {
    path:'enterprise',component:EnterpriseComponent
  },
  {
    path:'notes',component:NotesComponent
  },
  {
    path:'airen',component:AirenComponent
  },
  {
    path:'cart',component:CartComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
