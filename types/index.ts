export interface Villa {
  id: number;
  name: string;
  subtitle: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  lotSize?: string;
  constructionSize: string;
  features: string[];
  imagePlaceholder: string;
  gallery: string[];
}

export interface Amenity {
  id: number;
  title: string;
  description: string;
  imagePlaceholder: string;
}
