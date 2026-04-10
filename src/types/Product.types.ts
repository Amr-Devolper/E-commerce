export interface ProductType {
    id: string;
    imageCover: string;
    title: string;
    price: number;
    description: string;
    ratingsAverage: number;
    images: string[];
    priceAfterDiscount?: number;
    brand: BrandType;
    category: CategoryType;
  }

export interface BrandType {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }

export interface CategoryType {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }