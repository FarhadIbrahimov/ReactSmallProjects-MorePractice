import { Link } from "react-router-dom";
import stocks from "../data.jsx";
import { useStockContext } from "./StockProvider";
import Utils from "./utils.jsx";

export default function Dashboard() {
  return <Utils stocksData={stocks} pageName={"Most Active Stocks"} />;
}
