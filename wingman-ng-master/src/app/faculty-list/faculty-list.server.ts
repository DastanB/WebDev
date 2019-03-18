import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyListService {

    API_URL = 'http://localhost:3000/';

    constructor(private http: HttpClient) { }
    getFaculties() {
        return this.http.get(this.API_URL + 'faculties');
    }
}
