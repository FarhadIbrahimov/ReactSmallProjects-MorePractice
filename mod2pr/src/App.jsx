import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

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
  return (
    <>
      <div>
        <div>
          <button onClick={getJoke}>Get Joke</button>
        </div>

        <h2>{joke}</h2>
      </div>
    </>
  );
}

export default App;
