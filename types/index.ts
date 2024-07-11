export interface CategoryType {
  title: string;
  id: number;
  products: ProductType[];
}

export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}

export type CategoryMapType = {
  [key: string]: ProductType[];
};

export type CategoriesStateType = {
  categories: CategoryType[];
  name: string;
  isLoading: boolean;
};

export type CategoryPayloadType = {
  payload: CategoryType;
};

export type setNamePayload = {
  payload: {
    name: String;
  };
};
