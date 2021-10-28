import {CourseListComponent} from './components/course-list/course-list.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseCreateComponent} from "./components/course-create/course-create.component";
import {ErrorComponent} from "./components/error/error.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {AuthGuard} from "./auth/auth.guard";
import {AdminGuard} from "./auth/admin.guard";
import {CourseEditComponent} from "./components/course-edit/course-edit.component";

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CourseListComponent, canActivate: [AuthGuard]},
  {path: 'courses/new', component: CourseCreateComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'courses/:id', component: CourseEditComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
