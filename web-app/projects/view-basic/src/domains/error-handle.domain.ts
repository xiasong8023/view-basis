export class ErrorHandle{
  static listen<T>(url: string) {
    function errorHandle(error: any): Observable<ResponseError> {
      console.error(`地址 ${url} 访问失败`, error);
      return of(
        new ResponseError({
          Code: 500,
          Msg: error.message
        })
      );
    }

    return errorHandle;
  }
}
