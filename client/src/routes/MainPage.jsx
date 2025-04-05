import AllCollections from "../components/AllCollections";
import { Link } from "react-router-dom";
import Sliding from "../components/Sliding";

const MainPage = () => {
  return (
    <>
      <h1 className="mx-auto w-fit py-6 lg:text-3xl">Choose Collection</h1>
      <AllCollections />
      <Sliding />
      <Link
        to={"/latest"}
        className="lg:w-1/4 mx-auto rounded block mt-12 hover:bg-blue-900 text-sm lg:text-base bg-blue-800 text-white py-2 text-center"
      >
        Or check latest arrivals
      </Link>
    </>
  );
};

export default MainPage;
