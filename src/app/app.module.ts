import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { StylingAccessoriesThatComplementYourFormalWearComponent } from './notes/styling-accessories-that-complement-your-formal-wear/styling-accessories-that-complement-your-formal-wear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SlideMenuModule } from 'primeng/slidemenu';
import { SliderModule } from 'primeng/slider';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AnimateModule } from 'primeng/animate';
import { TimelineModule } from 'primeng/timeline';
import { StepsModule } from 'primeng/steps';




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
    StylingAccessoriesThatComplementYourFormalWearComponent,
    FeedbackFormComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MegaMenuModule,
    BadgeModule,
    FormsModule,
    CardModule,
    ReactiveFormsModule,
    ToggleButtonModule,
    SlideMenuModule,
    SliderModule,
    SidebarModule,
    ButtonModule,
   AnimateModule,
   BrowserAnimationsModule,
   HttpClientModule,
   TimelineModule,
   StepsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
