import { Link } from "react-router-dom";
import Main from "./Main";
import { useLocation } from "react-router-dom";

export default function SecondaryPage() {
  const location = useLocation();
  const joke = location?.state?.joke; //|| "No joke available";

  return (
    <>
      <div>
        <h3 className="text3">We are working to meet your expectations!</h3>

        <span>
          <h3 className="text3">
            But for now just read the Joke and click the button
          </h3>
        </span>
        <h2 className="text2 uppercase">{joke}</h2>
      </div>
    </>
  );
}
