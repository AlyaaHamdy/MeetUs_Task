import { createContext, useEffect, useState } from 'react';
import { product_list } from '../../assets/assets/js/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [cart, setCart] = useState([]);

  const addToCart = (productName, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.name === productName
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { name: productName, quantity }];
      }
    });
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const ContextValue = {
    product_list,
    cartItems,
    cart,
    cartItemCount,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
