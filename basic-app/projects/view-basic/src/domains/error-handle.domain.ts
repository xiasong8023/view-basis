import {Observable, of} from 'rxjs';

export class ErrorHandle{
  static listen<T>(url: string): any {
    function errorHandle(error: any): Observable<any> {
      console.error(`地址 ${url} 访问失败`, error);
      return of(
        {
          Code: 500,
          Msg: error.message
        }
      );
    }

    return errorHandle;
  }
}
