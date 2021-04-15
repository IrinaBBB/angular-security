import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessons.service';
import { Observable } from 'rxjs';
import { Lesson } from '../model/lesson';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'lessons',
    templateUrl: './lessons.component.html',
    styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
    lessons$: Observable<Lesson[]>;

    constructor(private lessonsService: LessonsService) {}

    // tslint:disable-next-line:typedef
    ngOnInit() {
        this.lessons$ = this.lessonsService.loadAllLessons();
    }
}
