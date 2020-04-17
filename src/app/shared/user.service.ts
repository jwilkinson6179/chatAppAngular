import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserViewModel} from "../sign-up/sign-up.component";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private BASE_URL = "http://localhost:8080";
    // User Endpoints
    private BASE_USERS_URL = `${this.BASE_URL}/users`;
    private GET_USER_URL = `${this.BASE_USERS_URL}/`;
    private CREATE_USER = `${this.BASE_URL}/register`;
    private GET_BY_USERNAME = `${this.BASE_USERS_URL}/username/`;

    constructor(private http: HttpClient) {

    }

    getUserById(id: number): Observable<any> {
        return this.http.get<UserViewModel>(this.GET_USER_URL + id)
    }

    getUserByUserName(username: String): Observable<any> {
        return this.http.get<UserViewModel>(`${this.GET_BY_USERNAME}` + username);
    }

    // USER CRUD Operations
    createUser(user: UserViewModel): Observable<any> {
        return this.http.post<UserViewModel>(this.CREATE_USER, user);
    }

}
