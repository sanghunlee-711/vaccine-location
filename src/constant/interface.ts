export interface CenterModel {
  id: number;
  centerName: string;
  sido: string;
  sigungu: string;
  facilityName: string;
  zipCode: string;
  address: string;
  lat: string;
  lng: string;
  centerType: string;
  org: string;
}

export interface Geo {
  latitude?: number;
  longitude?: number;
  statusText?: string;
}
