import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../model/lesson';

@Injectable()
export class LessonsService {
    constructor(private http: HttpClient) {}

    // tslint:disable-next-line:typedef
    loadAllLessons() {
        return this.http.get<Lesson[]>('http://localhost:9000/api/lessons');
    }

    // tslint:disable-next-line:typedef
    findLessonById(id: number) {
        return this.http.get<Lesson>('http://localhost:9000/api/lessons' + id);
    }
}
