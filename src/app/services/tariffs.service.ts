import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tariffs, TariffsDetails } from '../models';
import { herokuUrl } from './url-base';

@Injectable()
export class TariffsService {

    constructor(private _http: HttpClient) { }

    list(categoryId?: number): Observable<TariffsDetails[]> {
        let url = `${herokuUrl.url}/car-rental/tariffs`;
        if (categoryId) {
            url = `${herokuUrl.url}/car-rental/tariffs?categoryId=${categoryId}`;
        }
        return this._http.get<TariffsDetails[]>(url);
    }

    getTariffById(tariffId: number): Observable<TariffsDetails> {
        return this._http.get<TariffsDetails>(`${herokuUrl.url}/car-rental/tariffs/${tariffId}`);
    }

    create(tariff: Tariffs): Observable<Tariffs> {
        return this._http.post<Tariffs>(`${herokuUrl.url}/car-rental/tariffs`, tariff);
    }

    delete(tariffId: number): Observable<void> {
        const url = `${herokuUrl.url}/car-rental/tariffs/${tariffId}`;
        return this._http.delete<void>(url);
    }

}
