import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css', '../common/forms.css'],
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    errors: string[] = [];

    messagePerErrorCode = {
        min: 'The minimum length is 10 characters',
        uppercase: 'At least one upper case character',
        digits: 'At least one numeric character',
    };

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.form = this.fb.group({
            email: ['test@gmail.com', Validators.required],
            password: ['Pa$$w0rd', Validators.required],
            confirm: ['Pa$$w0rd', Validators.required],
        });
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {}

    signUp(): void {
        const val = this.form.value;

        if (val.email && val.password && val.password === val.confirm) {
            this.authService.signUp(val.email, val.password).subscribe(
                () => {
                    this.router.navigateByUrl('/');
                    console.log('User created successfully');
                },
                // tslint:disable-next-line:no-shadowed-variable
                (response) => (this.errors = response.error.errors)
            );
        }
    }
}
