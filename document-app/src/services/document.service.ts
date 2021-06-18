import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getNavigationList(): Promise<any>{
    const url = `./config/navigation.config.json`;
    return new Promise(resolve => {
      this.httpClient.get(`${url}?_=${new Date().getTime()}`).subscribe((res) => {
        resolve(res);
      });
    });
  }

  getNavMenu(name: string): Promise<any>{
    const url = `./config/${name}.config.json`;
    return new Promise(resolve => {
      this.httpClient.get(`${url}?_=${new Date().getTime()}`).subscribe((res) => {
        resolve(res);
      });
    });
  }

  getDocument(name: string): Promise<any>{
    const url = `./config/document/${name}.md`;
    return new Promise(resolve => {
      this.httpClient.get(`${url}?_=${new Date().getTime()}`, {responseType: 'text'}).subscribe((res) => {
        resolve(res);
      });
    });
  }
}
