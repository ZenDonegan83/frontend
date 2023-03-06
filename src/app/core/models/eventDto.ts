import { CustomerDTO } from "./customerDto";
import { EventCustomerPDFDTO } from "./eventCustomerPDFDto";
import { UserDTO } from "./userDto";

export class EventDTO {
  eventID: number;
  artistID: number;
  userDTO: UserDTO;
  customerID: number;
  customerDTO: CustomerDTO;
  startTime: string;
  endTime: string;
  cost: number;
  imageURL: string;
  startDateStr: string;
  endDateStr: string;
  tattooLocation: string;
  comments: string;
  cancelled: string;
  noShow: string;
  reschedule: string;
  eventCustomerPDFDTO: EventCustomerPDFDTO;
  eventImageList: any[] = [];
}
