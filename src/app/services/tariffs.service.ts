import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TariffsService {

    constructor(private _http: HttpClient) { }

    list(): Observable<any[]> {
        return this._http.get<any[]>('https://secure-shore-34161.herokuapp.com/car-rental/manufacturers');
    }

    create(body: any): Observable<any> {
        return this._http.post('', body);
    }

    delete(body: any): Observable<any> {
        return this._http.delete('', body);
    }

}