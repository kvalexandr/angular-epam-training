import {Course} from './../models/Course';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  getList(page: number = 0, search: string = ''): Observable<Course[]> {
    const countCourse = 2;
    let params = new HttpParams();
    params = params.append('sort', 'date');
    params = params.append('count', countCourse);
    params = params.append('start', page * countCourse);
    if (search) params = params.append('textFragment', search);

    return this.http.get<Course[]>(`http://localhost:3004/courses`, {
      params
    }).pipe(delay(1000));
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3004/courses/${id}`);
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(`http://localhost:3004/courses`, course);
  }

  update(id: number, course: Course): Observable<Course> {
    return this.http.patch<Course>(`http://localhost:3004/courses/${id}`, course);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3004/courses/${id}`);
  }
}
