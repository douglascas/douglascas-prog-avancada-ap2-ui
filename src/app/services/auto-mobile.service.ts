import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer, Categories, Model, ModelYear } from '../models';

@Injectable()
export class AutoMobileService {

    constructor(private _http: HttpClient) { }


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
        return this._http.get<ModelYear[]>(`http://secure-island-06995.herokuapp.com/car-rental/manufacturers/${manufactureId}/models/${modelId}`);
    }
}
