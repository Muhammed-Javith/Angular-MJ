import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { PostComponent } from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes:Routes = [
  { path: '' , component: HomeComponent },
  { path: 'about' , component: AboutComponent },
  { path: 'contact-us' , component: ContactUsComponent },
  { path: 'post/:id' , component: PostComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
