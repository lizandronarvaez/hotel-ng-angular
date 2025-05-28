import { Room } from "./room.interface";

export interface ResponseRoomsByDateAndType {
  statusCode: number;
  message:    string;
  roomList:   Room[];
}
