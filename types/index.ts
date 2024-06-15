export interface CategoryType {
  title: string;
  id: number;
  items: ItemType[];
}

export interface ItemType {
  id: number;
  name: string;
  price: number;
  image: string;
}
