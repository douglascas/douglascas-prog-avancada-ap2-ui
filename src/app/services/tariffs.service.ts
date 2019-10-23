import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariffs, TariffsDetails } from '../models';

@Injectable()
export class TariffsService {

    constructor(private _http: HttpClient) { }

    list(): Observable<TariffsDetails[]> {
        return this._http.get<TariffsDetails[]>('http://secure-island-06995.herokuapp.com/car-rental/tariffs');
    }

    getTariffById(tariffId: number): Observable<TariffsDetails> {
        return this._http.get<TariffsDetails>(`http://secure-island-06995.herokuapp.com/car-rental/tariffs/${tariffId}`);
    }

    create(tariff: Tariffs): Observable<Tariffs> {
        return this._http.post<Tariffs>('http://secure-island-06995.herokuapp.com/car-rental/tariffs', tariff);
    }

    delete(body: any): Observable<any> {
        return this._http.delete('', body);
    }

}
