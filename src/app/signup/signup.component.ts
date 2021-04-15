import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css', '../common/forms.css'],
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    errors: string[] = [];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm: ['', Validators.required],
        });
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {}

    signUp(): void {
        const val = this.form.value;
    }
}
