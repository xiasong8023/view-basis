export class ErrorResponse{
  errorResponse: ErrorResponseDetail;
  constructor(option: {
    errorResponse?: ErrorResponseDetail;
  } = {}) {
    this.errorResponse = new ErrorResponseDetail(option.errorResponse || {})
  }
}

class ErrorResponseDetail{
  Code: string;
  Msg: string;
  constructor(option: {
    Code?: string;
    Msg?: string;
  } = {}) {
    this.Code = option.Code || '';
    this.Msg = option.Msg || '';
  }
}
