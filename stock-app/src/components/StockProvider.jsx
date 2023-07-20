import { useContext, createContext, useState } from "react";
import stocks from "../data.jsx";

export const StockContext = createContext();

export function useStockContext() {
  return useContext(StockContext);
}

export function StockProvider(props) {
  const [myStock, setMyStock] = useState([]);
  let stockObj = { myStock, setMyStock };
  return (
    <StockContext.Provider value={stockObj}>
      {props.children}
    </StockContext.Provider>
  );
}
