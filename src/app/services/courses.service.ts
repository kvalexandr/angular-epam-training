import {Course} from './../models/Course';
import {Authors} from './../models/Authors';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {delay} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  getList(page: number = 0, search: string = ''): Observable<Course[]> {
    const countCourse = environment.countCourse;
    let params = new HttpParams();
    params = params.append('sort', 'date');
    params = params.append('count', countCourse);
    params = params.append('start', page * countCourse);
    if (search) params = params.append('textFragment', search);

    return this.http.get<Course[]>(`${environment.apiUrl}/courses`, {
      params
    }).pipe(delay(1000));
  }

  getById(id: number): Observable<Course> {
    return this.http.get<Course>(`${environment.apiUrl}/courses/${id}`);
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(`${environment.apiUrl}/courses`, course);
  }

  update(id: number, course: Course): Observable<Course> {
    return this.http.patch<Course>(`${environment.apiUrl}/courses/${id}`, course);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/courses/${id}`);
  }

  getAuthors(search: string = ''): Observable<Authors[]> {
    let params = new HttpParams();
    params = params.append('textFragment', search);

    return this.http.get<Authors[]>(`${environment.apiUrl}/authors`, {
      params
    });
  }
}
