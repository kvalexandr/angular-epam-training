import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchBarComponent } from './components/course-list/search-bar/search-bar.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-list/course-item/course-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { CourseCreateComponent } from './components/course-create/course-create.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BorderDirective } from './directives/border.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputDurationComponent } from './components/input-duration/input-duration.component';
import { ErrorComponent } from './components/error/error.component';
import {HttpClientModule} from "@angular/common/http";
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import {AUTH_INTERCEPTOR_PROVIDER} from "./config/config";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SearchBarComponent,
    CourseListComponent,
    CourseItemComponent,
    FooterComponent,
    LogoComponent,
    CourseCreateComponent,
    BorderDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    InputTextComponent,
    InputDurationComponent,
    ErrorComponent,
    CourseFormComponent,
    CourseEditComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
