import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolComponent } from './school/school.component';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { CollegeComponent } from './college/college.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotesComponent } from './notes/notes.component';
import { AirenComponent } from './airen/airen.component';
import { CartComponent } from './cart/cart.component';
import { NoteCard1Component } from './note-card1/note-card1.component';
import { StylingAccessoriesThatComplementYourFormalWearComponent } from './notes/styling-accessories-that-complement-your-formal-wear/styling-accessories-that-complement-your-formal-wear.component';
import { ProductsComponent } from './products/products.component';
import { SchoolViewProductsComponent } from './products/school-view-products/school-view-products.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from '../Gaurds/auth.guard';

const routes: Routes = [
  {
    path: 'school',
    component: SchoolComponent,canActivate:[authGuard]
  },
  {
    path: '',
    component: AcecraftComponent,
  },
  {
    path: 'college',
    component: CollegeComponent,
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'notessub1/:id',
    component: StylingAccessoriesThatComplementYourFormalWearComponent,
  },
  {
    path: 'airen',
    component: AirenComponent,
  },
  {
    path: 'cart',
    component: CartComponent,canActivate:[authGuard]
  },
  {
    path: 'note-card1',
    component: NoteCard1Component,
  },
  {
    path: 'products', component: ProductsComponent,
  },
  {
    path: 'school-prod-view/:id', component: SchoolViewProductsComponent,
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
