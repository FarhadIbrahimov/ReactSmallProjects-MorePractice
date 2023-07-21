import { Link } from "react-router-dom";
import { useStockContext } from "./StockProvider";
import Utils from "./utils";

export default function MyStocks() {
  const { myStock, setMyStock } = useStockContext();
  console.log(myStock);
  return <Utils stocksData={myStock} pageName={"Followed Stocks"} />;
}
