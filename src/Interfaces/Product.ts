export interface IProductList {
  id: string | number;
  name: string;
  productImage: string;
  status: string;
  value: number;
  description: string;
  deliveryTime: string;
  weight: string;
}
export interface IProductTemp {
  id: string | number;
  name: string;
  amount: number;
  description: string;
  productImages: {
    name: string;
    url: string;
  }[];
}

export interface IGetSellerCat {
  avatar?: string | any;
  subCategoryId?: number;
  name?: string;
  vendaCategoryId?: number;
}
