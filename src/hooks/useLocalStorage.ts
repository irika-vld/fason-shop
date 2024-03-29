import { useCallback, useEffect, useRef } from "react";
import { IFavorites, IProductWithQuantity, IUser } from "../interfaces/interfaces";

export const useLocalStorage = (
  stateCart: IProductWithQuantity[],
  stateFav: IFavorites[],
  stateUser: IUser | null
) => {
  const isMounted = useRef(false);

  const addToLocalStorage = useCallback(() => {
    if (isMounted.current) {
      const json = JSON.stringify(stateFav);
      localStorage.setItem("favorites", json);
      const jsonCart = JSON.stringify(stateCart);
      localStorage.setItem("cart", jsonCart);
      const jsonUser = JSON.stringify(stateUser);
      localStorage.setItem("user", jsonUser);
    }
    isMounted.current = true;
  }, [stateFav, stateCart, stateUser]);

  useEffect(() => {
    addToLocalStorage();
  }, [addToLocalStorage]);
};
