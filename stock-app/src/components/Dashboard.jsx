import stocks from "../data.jsx";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <h1>Most active Stocks</h1>
      <div className="outerContainer">
        <div className="companyName">
          Company Name
          {stocks.map((stock) => {
            return (
              <>
                <hr />
                <div>{stock.name}</div>
              </>
            );
          })}
          <hr />
        </div>
        <div className="price">
          Price
          {stocks.map((stock) => {
            return (
              <>
                <hr />
                <div>{stock.lastPrice}</div>
              </>
            );
          })}
          <hr />
        </div>
        <div className="change">
          Change
          {stocks.map((stock) => {
            return (
              <>
                <hr />
                <div>{stock.change}</div>
              </>
            );
          })}
          <hr />
        </div>
      </div>
    </div>
  );
}
