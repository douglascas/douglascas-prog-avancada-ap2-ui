import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer, Categories, Model, ModelYear, CheaperRent } from '../models';

export interface AutoParams {
    startDate?: string;
    endDate?: string;
    loyaltyProgram?: boolean;
}

@Injectable()
export class AutoMobileService {

    constructor(private _http: HttpClient) { }

    listCheaperRent(params?: AutoParams): Observable<CheaperRent[]> {

        const url = 'http://secure-island-06995.herokuapp.com/car-rental/cheaper-rent';

        if (params) {
            const optionsHttp = {
                params: new HttpParams()
                    .set('startDate', params.startDate ? params.startDate : null)
                    .set('endDate', params.endDate ? params.endDate : null)
                    .set('loyaltyProgram', params.loyaltyProgram.toString())
            };
            return this._http.get<CheaperRent[]>(url, optionsHttp);
        }

        return this._http.get<CheaperRent[]>(url);

    }

    listManufacturers(): Observable<Manufacturer[]> {
        return this._http.get<Manufacturer[]>('http://secure-island-06995.herokuapp.com/car-rental/manufacturers');
    }

    listManufacturersById(id: number): Observable<Manufacturer[]> {
        return this._http.get<Manufacturer[]>(`http://secure-island-06995.herokuapp.com/car-rental/manufacturers/${id}`);
    }

    listCategories(): Observable<Categories[]> {
        return this._http.get<Categories[]>('http://secure-island-06995.herokuapp.com/car-rental/categories');
    }

    listCategoriesById(id: number): Observable<Categories[]> {
        return this._http.get<Categories[]>(`http://secure-island-06995.herokuapp.com/car-rental/categories/${id}`);
    }

    listModels(): Observable<Model[]> {
        return this._http.get<Model[]>('http://secure-island-06995.herokuapp.com/car-rental/models');
    }

    listModelsByManufactureId(manufactureId: number): Observable<Model[]> {
        return this._http.get<Model[]>(`http://secure-island-06995.herokuapp.com/car-rental/manufacturers/${manufactureId}/models`);
    }

    listYearsByManufactureAndModelId(manufactureId: number, modelId: number): Observable<ModelYear[]> {
        const url = `http://secure-island-06995.herokuapp.com/car-rental/manufacturers/${manufactureId}/models/${modelId}`;
        return this._http.get<ModelYear[]>(url);
    }
}
