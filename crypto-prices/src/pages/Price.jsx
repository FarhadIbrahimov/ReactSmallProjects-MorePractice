/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Price() {
  const [coin, setCoin] = useState({});

  const params = useParams(); //{symbol: 'BTC}
  //When the component is rendered, the useParams hook will return an object containing the parameters from the URL. You can then access these parameters using dot notation or array syntax.
  console.log(params);

  async function getCoin() {
    let key = import.meta.env.VITE_API_KEY;
    let api = `http://rest.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${key}`;

    const response = await fetch(api);
    const data = await response.json();
    setCoin(data);
  }
  //below condition prevents fetch call from happening again
  useEffect(() => {
    console.log("useEffect");
    if (!coin.rate) {
      getCoin();
    }

    // This is the effect function
    // It runs after the component mounts and only once because of the empty dependency array
    // Add any side effect code here, such as data fetching, subscriptions, or DOM manipulations
    // Since the effect function is empty in this case, there are no specific side effects performed
    // Optionally, you can return a cleanup function if cleanup is needed
    // The cleanup function will be called before the component unmounts or when the effect runs again
    // Since there is no specific cleanup logic needed in this case, no cleanup function is provided
  }, []);
  function loading() {
    return <div>Loading</div>;
  }

  function loaded() {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  }
  return coin.rate ? loaded() : loading();
}
