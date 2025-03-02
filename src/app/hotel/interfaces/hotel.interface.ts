export interface Hotel {
  id:                  number;
  name:                string;
  price:               string;
  description:         string;
  picture:             null;
  street:              string;
  number:              number;
  cityName:            string;
  services:            Service[];
  averageCalification: number;
}

export interface Service {
  serviceId:   number;
  serviceName: string;
}
