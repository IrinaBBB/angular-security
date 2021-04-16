import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css', '../common/forms.css'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.form = this.fb.group({
            email: ['test@gmail.com', Validators.required],
            password: ['Pa$$w0rd', Validators.required],
        });
    }

    ngOnInit(): void {}

    login(): void {
        const formValue = this.form.value;

        this.authService
            .login(formValue.email, formValue.password)
            .subscribe(() => {
                console.log('User is logged in');
                this.router.navigateByUrl('/');
            });
    }
}
