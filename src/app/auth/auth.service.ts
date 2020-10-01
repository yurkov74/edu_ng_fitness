import { Subject } from 'rxjs';
// app models
import { AuthData } from './auth-data.model';
import { User } from './user.model';

export class AuthService {
    private user: User;
    authChanged = new Subject<boolean>();

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authChanged.next(true);
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authChanged.next(true);
    }

    logout() {
        this.user = null;
        this.authChanged.next(false);
    }

    getUser() { return {...this.user}; }

    isAuth() { return this.user != null; }
}