import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { EventfilteringComponent } from './eventfiltering/eventfiltering.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesAllComponent } from './pipes-all/pipes-all.component';
import { ExerciseFevoraitComponent } from './exercise-fevorait/exercise-fevorait.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
// import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    EventfilteringComponent,
    TwoWayBindingComponent,
    PipesAllComponent,
    ExerciseFevoraitComponent,
    ContactFormComponent,
    TodolistComponent,
    PostsComponent,

    // TitleCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
  HttpClientModule
  
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
