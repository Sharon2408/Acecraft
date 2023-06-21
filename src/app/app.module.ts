import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MegaMenuModule } from 'primeng/megamenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BadgeModule } from 'primeng/badge';
import { CustompipePipe } from './custompipe.pipe';
import { AcecraftComponent } from './acecraft/acecraft.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CollegeComponent } from './college/college.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { NotesComponent } from './notes/notes.component';
import { AirenComponent } from './airen/airen.component';
import { CartComponent } from './cart/cart.component';
import { CardModule } from 'primeng/card';
import { NoteCard1Component } from './note-card1/note-card1.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    NavbarComponent,
    CustompipePipe,
    AcecraftComponent,
    FooterComponent,
    CollegeComponent,
    EnterpriseComponent,
    NotesComponent,
    AirenComponent,
    CartComponent,
    NoteCard1Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    BadgeModule,
    FormsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
