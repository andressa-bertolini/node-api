export type PropertyPurpose = "rent" | "sale";
export type PropertyType = "apartment" | "house";

export interface Property {
  id: number;
  title: string;
  description: string;
  purpose: PropertyPurpose;
  type: PropertyType;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  city: string;
  state: string;
  lat: number;
  long: number;
  featuredImage: string;
  images: string[];
  amenities: string[];
}

export interface Place {
  state: string;
  cities: string[];
}
