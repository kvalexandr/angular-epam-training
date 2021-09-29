import { Course } from './../models/Course';
import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  public courses: Course[] = [];

  constructor() { }

  getList() {
    this.courses = [
    {
      id: 1,
      title: 'HTML + CSS',
      create_data: new Date(2021, 8, 20).toString(),
      duration: 30,
      topRated: true,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
      about
      various components of a course description. Course descriptions report information about a university or
      college's
      classes. They're published both in course catalogs that outline degree requirements and in course schedules that
      contain
      descriptions for all courses offered during a particular semester.`
    },
    {
      id: 2,
      title: 'Angular',
      create_data: new Date(2021, 7, 28).toString(),
      duration: 80,
      topRated: false,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
      about
      various components of a course description. Course descriptions report information about a university or
      college's
      classes. They're published both in course catalogs that outline degree requirements and in course schedules that
      contain
      descriptions for all courses offered during a particular semester.`
    },
    {
      id: 3,
      title: 'Javascript begin',
      create_data: new Date(2021, 3, 9).toString(),
      duration: 120,
      topRated: true,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
      about
      various components of a course description. Course descriptions report information about a university or
      college's
      classes. They're published both in course catalogs that outline degree requirements and in course schedules that
      contain
      descriptions for all courses offered during a particular semester.`
    },
    {
      id: 4,
      title: 'Javascript pro',
      create_data: new Date(2021, 8, 30).toString(),
      duration: 160,
      topRated: false,
      description: `Learn about where you can find course descriptions, what information they include, how they work, and details
      about
      various components of a course description. Course descriptions report information about a university or
      college's
      classes. They're published both in course catalogs that outline degree requirements and in course schedules that
      contain
      descriptions for all courses offered during a particular semester.`
    }
    ];
  }

  create() {

  }

  getById(id: number) {

  }

  update() {

  }

  remove(elem: Course) {
    const courseSet = new Set(this.courses);
    courseSet.delete(elem);
    this.courses = Array.from(courseSet);
  }
}
