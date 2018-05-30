import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DescriptionComponent } from './description.component';
import { ContactComponent } from './contact.component';
import { MenuComponent } from './menu.component';
import { FooterComponent } from './footer.component';
import { PageNotFoundComponent } from './pageNotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbdCarouselBasic } from './carousel-basic';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'opis',
    component: DescriptionComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
    ], 
  declarations: [
    AppComponent, 
    NgbdCarouselBasic,
    HomeComponent,
    DescriptionComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    PageNotFoundComponent
    ],
  bootstrap: [AppComponent]
}) 
export class AppModule {}
