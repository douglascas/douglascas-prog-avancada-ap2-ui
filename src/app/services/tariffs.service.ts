import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer } from '../models';

@Injectable()
export class TariffsService {

    constructor(private _http: HttpClient) { }

    list(): Observable<Manufacturer[]> {
        return this._http.get<Manufacturer[]>('http://10.120.128.20:9001/car-rental/manufacturers');
    }

    te(body: any): Observable<any> {
        return this._http.post('', body);
    }

    delete(body: any): Observable<any> {
        return this._http.delete('', body);
    }

}
