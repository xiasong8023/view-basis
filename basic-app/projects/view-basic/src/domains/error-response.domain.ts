export class ErrorResponse{
  errorResponse: ErrorResponseDetail;
  constructor(option: Partial<ErrorResponse> = {}) {
    this.errorResponse = new ErrorResponseDetail(option.errorResponse || {});
  }
}

class ErrorResponseDetail{
  Code: string;
  Msg: string;
  constructor(option: Partial<ErrorResponseDetail> = {}) {
    this.Code = option.Code || '';
    this.Msg = option.Msg || '';
  }
}
