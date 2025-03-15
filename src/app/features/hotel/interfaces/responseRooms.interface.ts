import { Room } from "./room.interface";

export interface ResponseRoom {
  statusCode: number;
  message:    string;
  roomList:   Room[];
}
