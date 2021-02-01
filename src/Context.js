//import hooks from react
import { createContext, useContext, useState } from "react";

//create a new context called MyContext
const MyContext = createContext();

//export useContext to be used in any child component
export const UseBasketContext = () => {
  return useContext(MyContext);
};

// setup a provider wrapper with a variable called basket
export const MyContextProvider = ({ children }) => {
  const [basket, setBasket] = useState();

  const allObj = {
    basket,
    setBasket,
  };

  return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>;
};
