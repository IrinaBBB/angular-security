import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { map, shareReplay, tap, filter } from 'rxjs/operators';

export const ANONYMOUS_USER: User = {
    id: undefined,
    email: '',
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private subject = new BehaviorSubject<User>(undefined);

    user$: Observable<User> = this.subject
        .asObservable()
        .pipe(filter((user) => !!user));

    isLoggedIn$: Observable<boolean> = this.user$.pipe(
        map((user) => !!user.id)
    );
    isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(
        map((isLoggedIn$) => !isLoggedIn$)
    );

    constructor(private http: HttpClient) {
        http.get<User>('https://localhost:9000/api/user').subscribe((user) =>
            this.subject.next(user ? user : ANONYMOUS_USER)
        );
    }

    signUp(email: string, password: string): Observable<User> {
        return this.http
            .post<User>('https://localhost:9000/api/signup', {
                email,
                password,
            })
            .pipe(shareReplay())
            .pipe(tap((user) => this.subject.next(user)));
    }

    logout(): Observable<any> {
        return this.http
            .post('https://localhost:9000/api/logout', null)
            .pipe(shareReplay())
            .pipe(tap((user) => this.subject.next(ANONYMOUS_USER)));
    }

    login(email, password): Observable<User> {
        return this.http
            .post<User>('https://localhost:9000/api/login', {
                email,
                password,
            })
            .pipe(shareReplay())
            .pipe(tap((user) => this.subject.next(user)));
    }
}
