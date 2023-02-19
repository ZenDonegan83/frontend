import { SignatureDTO } from "./signatureDto";

export class CustomerDTO {
  customerID: number;
  stripeID?: any;
  firstName: string;
  lastName: string;
  telNumber: string;
  email: string;
  createDate: Date;
  profilePicURL: string;
  signatureDTO: SignatureDTO;
}
