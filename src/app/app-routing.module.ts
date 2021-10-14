import { CourseListComponent } from './components/course-list/course-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseCreateComponent} from "./components/course-create/course-create.component";

const routes: Routes = [
  {path: '', component: CourseListComponent},
  {path: 'add', component: CourseCreateComponent},
  //{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
