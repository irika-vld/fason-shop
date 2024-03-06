export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity?: number;
}

export interface IFavoritesState {
  favorites: {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
  }[];
}

export interface ICard {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  detailsIsOpenHandler: (id: number) => void;
}

export interface IProductDetails {
  cardId: number;
  setIsDetailsOpen: (x: boolean) => void;
}

export interface IHeader {
  setIsMenuOpen: (x: boolean) => void;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  setIsSearchOpen: (x: boolean) => void;
  titleClick: () => void;
}

export interface ICardDetails {
  detailsIsOpenHandler: (id: number) => void;
  isDetailOpen: boolean;
  setIsDetailsOpen: (x: boolean) => void;
  cardId: number;
}