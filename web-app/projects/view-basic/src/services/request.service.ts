import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Util} from "../share";
import {catchError} from "rxjs/operators";
import {ErrorHandle} from "../domains/error-handle.domain";
import {ErrorResponse} from "../domains";

@Injectable({
  providedIn: 'root'
})
export class Request {
  private static base = './api/';
  private _base: string;
  private _timeStamp: boolean = true;
  constructor(
    private http: HttpClient,
  ) {
    this._base = Request.base
  }
  get base() {
    return this._base;
  }

  set base(value: string) {
    this._base = value;
  }

  get timeStamp() {
    return this._timeStamp;
  }

  set timeStamp(value: boolean) {
    this._timeStamp = value;
  }

  get<T>(url: string, httpParams?: HttpParams, httpHeaders?: HttpHeaders): Promise<T>{
    if (httpParams){
      httpParams.keys().forEach(key => {
        Util.addUrlParam(url, `${key}=${httpParams.get(key)?.toString()}`)
      })
    }
    return new Promise(((resolve, reject) => {
      this.http.get<T>(
          this.urlSign(url)
        )
        .pipe(catchError(ErrorHandle.listen<T>(url)))
        .subscribe(response => {
          this.onRequestSuccess(resolve, reject, response)
        }, (err: ErrorResponse) => {
          reject(err.errorResponse);
        })
    }))
  }
  post<T>(url: string, httpParams?: HttpParams, httpHeaders?: HttpHeaders): Promise<T>{
    return new Promise(((resolve, reject) => {
      this.http.post<T>(
          this.urlSign(url),
          httpParams
        )
        .pipe(catchError(ErrorHandle.listen<T>(url)))
        .subscribe(response => {
          this.onRequestSuccess(resolve, reject, response)
        }, (err: ErrorResponse) => {
          reject(err.errorResponse);
        })
    }))
  }

  onRequestSuccess<T>(resolve: (value?: any) => void, reject: (reason?: any) => void, response: any){
    if (typeof response === 'object' && response.hasOwnProperty('errorResponse')) {
      response = new ErrorResponse(response as any);
    }
    if (response instanceof ErrorResponse) {
      reject(response.errorResponse);
    }else{
      resolve(response as T);
    }
  }

  private urlSign(url: string): string{
    if(this.timeStamp){
      url = Util.addUrlParam(url, '_=' + new Date().getTime().toString());
    }
    return this.base + url;
  }
}