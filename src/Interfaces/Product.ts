// export interface IProductList {
//   id: string | number;
//   title: string;
//   productImage: string;
//   status: string;
//   price: number;
//   description: string;
//   deliveryTime: string;
// }
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
