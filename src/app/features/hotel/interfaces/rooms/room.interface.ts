import { ServiceRoom } from "../responseBooking.interface";

export interface Room {
  id?:              number;
  roomType:        string;
  roomPrice:       number;
  roomMaxOfGuest:  number;
  roomImageUrl:    string;
  roomDescription: string;
  serviceRooms:    ServiceRoom[];
  bookings:        null;
}
