export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  image?: string;
  category: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  alt: string;
}
