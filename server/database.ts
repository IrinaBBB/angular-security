import * as _ from 'lodash';
import { LESSONS, USERS } from './database-data';
import { DbUser } from './db-user';

class InMemoryDatabase {
    userCounter = 0;

    // tslint:disable-next-line:typedef
    readAllLessons() {
        return _.values(LESSONS);
    }
}

export const db = new InMemoryDatabase();
