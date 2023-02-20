export class EventCustomerPDFDTO {
  eventCustomerPDFID: number;
  eventID: number;
  isCustomerSignedPDF: string;
  pdfSignLinkExpireTime: Date;
  pdfSignUUID: string;
  singedDateTime?: any;
  signedPDFFileName?: any;
}
