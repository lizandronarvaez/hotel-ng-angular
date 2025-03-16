export interface ResponseBooking {
    statusCode: number;
    message: string;
    booking: Booking[];
}

export interface Booking {
    id: number;
    checkInDate: Date;
    checkOutDate: Date;
    bookingCode: string;
    userDto: UserDto;
    roomDto: RoomDto;
}

export interface RoomDto {
    id: number;
    roomType: string;
    roomPrice: number;
    roomMaxOfGuest: number;
    roomImageUrl: string;
    roomDescription: string;
    serviceRooms: ServiceRoom[];
    bookings: null;
}

export interface ServiceRoom {
    id: number;
    name: string;
}

export interface UserDto {
    id: number;
    email: string;
    fullName: string;
    numberPhone: string;
    role: string;
    bookings?: string[];
}
