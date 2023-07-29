import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "./Main";

export default function SecondaryPage() {
  const location = useLocation();
  const joke = location?.state?.joke;
  // location?.state?.joke ||
  // "stop  clicking left and right.. website is under construction..   "; /*|| operator is used in this context as a fallback or default value. It's called the "logical OR" operator in JavaScript, and its behavior is as follows:

  // If the value on the left side of the || operator is "truthy" (i.e., not falsy, like null, undefined, 0, empty string, NaN, or false), it will be returned. Otherwise, the value on the right side of the || operator will be returned.*/

  //Check if joke is available
  const jokeAvailable = !!joke;

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    const previousVisitorsCount = localStorage.getItem("visitorCount");
    console.log(previousVisitorsCount);
    if (previousVisitorsCount) {
      setVisitorCount(parseInt(previousVisitorsCount));
    }
  }, []);
  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    setVisitorCount((prevCount) => prevCount + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitorCount", visitorCount);
  }, [visitorCount]);

  return (
    <>
      <div>
        {jokeAvailable ? (
          <>
            <h3 className="text3">We are working to meet your expectations!</h3>
            <span>
              <h3 className="text3">
                But for now just read the Joke and click the button
              </h3>
            </span>
            <h2 className="text2 uppercase">{joke}</h2>
            {/* <button className="thumbs-button uppercase">&#x1F44D;</button>
        <button className="thumbs-button uppercase ">&#x1F44E;</button> */}

            <div>
              <span
                role="img" //the role of the element. In this case, the role is set to "img," which means that the span element is being used as an image to represent the thumbs-up emoji.
                aria-label="Thumbs-up" //provides an accessible label for the thumbs-up emoji so that screen readers and other assistive technologies can read it aloud for users with disabilities
                className="thumbs-up-emoji "
                onClick={handleLike}
              >
                👍
              </span>
              <span>Like Count: {likeCount}</span>
            </div>
            <div>
              <span
                role="img"
                aria-label="Thumbs Down"
                className="thumbs-down-emoji "
                onClick={handleDislike}
              >
                👎
              </span>
              <span>Dislike Count: {dislikeCount}</span>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text2 uppercase">
              stop clicking left and right.. website is under construction..
            </h2>
          </div>
        )}
        {/* Visitors Counter */}
        <div
          style={{
            position: "fixed",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "lightgrey",
            padding: "10px 20px",
            borderRadius: 5,
            fontWeight: "bold",
          }}
        >
          Visitors: {visitorCount}
        </div>
      </div>
    </>
  );
}

/**
 * Understanding localStorage: localStorage is a web storage API in JavaScript that allows you to store key-value pairs in a web browser. Unlike session storage, localStorage persists even after the browser is closed and reopened. It provides a way to store data on the user's browser without any expiration date. This makes it a good option for maintaining data between sessions or for storing preferences, settings, or user-related data.

Using localStorage: To use localStorage, you can access the localStorage object provided by the browser. It has methods like setItem, getItem, removeItem, and clear to manage the data.

Storing Data in localStorage: To store data, use the setItem method, providing a key and its corresponding value as arguments.

localStorage.setItem("key", "value");

Retrieving Data from localStorage: To retrieve data, use the getItem method and provide the key for the value you want to retrieve.

const value = localStorage.getItem("key");

Removing Data from localStorage: To remove data, use the removeItem method and provide the key you want to remove.

localStorage.removeItem("key");

Clearing All Data from localStorage: To clear all data stored in localStorage, use the clear method.

localStorage.clear();






*/
