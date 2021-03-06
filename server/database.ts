import * as _ from 'lodash';
import { LESSONS, USERS } from './database-data';
import { DbUser } from './db-user';

class InMemoryDatabase {
    userCounter = 0;

    // tslint:disable-next-line:typedef
    readAllLessons() {
        return _.values(LESSONS);
    }

    createUser(email: string, password: string): DbUser {
        const usersPerEmail = _.keyBy(_.values(USERS), 'email');

        if (usersPerEmail[email]) {
            const message = 'A user already exists with email ' + email;
            console.error(message);
            throw new Error(message);
        }

        this.userCounter++;

        const id = this.userCounter;
        const user: DbUser = {
            id,
            email,
            passwordDigest: password,
        };

        USERS[id] = user;

        console.log(USERS);

        return user;
    }
}

export const db = new InMemoryDatabase();
