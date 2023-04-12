export interface Area {
  id?: number;
  name?: string;
  rating?: number;
  distance?: number;
  date?: Date;
  price?: number;
  liked?: boolean;
  image?: string;
  guests?: number;
  bedrooms?: number;
  bathrooms?: number;
  host?: string;
  hostimage?: string;
  offering_name?: string;
}

export interface offering {
  icon: string;
  item_name: string;
}
