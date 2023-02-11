export class ResponseDto {
  appsErrorMessages: errorMesg[] = [];
  result: any | any[] = null;
  status: string;
}

class errorMesg {
  errorMessage: string = "";
}
