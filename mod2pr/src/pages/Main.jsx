import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Main() {
  const [isClicked, setIsClicked] = useState(0);
  const [joke, setJoke] = useState("");
  const navigate = useNavigate();

  const getJoke = () => {
    // fetch("https://official-joke-api.appspot.com/random_joke")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setJoke(data.setup + "...." + data.punchline);
    //   });

    Axios.get("https://official-joke-api.appspot.com/random_joke").then(
      (response) => {
        console.log(response);
        setJoke(response.data.setup + "...   .." + response.data.punchline);
      }
    );
  };
  useEffect(() => {
    getJoke();
  }, [isClicked]);
  console.log(isClicked);

  function handleButton() {
    setIsClicked((previousClick) => previousClick + 1);
    navigate("/second", { state: { joke } }); // Pass the joke as state to the "/second" page
  }
  return (
    <>
      <div>
        <div>
          <button className="logo uppercase" onClick={handleButton}>
            It's Easy
          </button>
        </div>
        <h2 className="text2">
          Sorry, actual website functionality is still under construction,
          meanwhile click for a little positivity
        </h2>
      </div>
    </>
  );
}
