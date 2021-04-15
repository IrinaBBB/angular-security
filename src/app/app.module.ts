import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonsService } from './services/lessons.service';
import { LessonsComponent } from './lessons/lessons.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routesConfig } from './routes.config';

@NgModule({
    declarations: [
        AppComponent,
        LessonsComponent,
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule.forRoot(routesConfig),
        ReactiveFormsModule,
    ],
    providers: [LessonsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
