import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../app/features/gameDataSlice";
// import Carousel from "../components/Carousel";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.gameData);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="grid md:grid-cols-4 md:gap-6 max-w-screen-xl mx-auto p-4">
      {loading ? (
        <p className="text-4xl text-blue-500 text-center">Loading...</p>
      ) : (
        data.map((gameData) => (
          <div
            key={gameData.gameID}
            className="max-w-sm bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to="#">
              <img
                className="rounded-t-lg w-full h-24"
                src={gameData.thumb}
                alt=""
              />
            </Link>
            <div className="p-5">
              <a to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {gameData.external}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                $ {gameData.cheapest}
              </p>
              <a
                to="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add To Cart
              </a>
            </div>
          </div>
        ))
      )}

      {error && <p className="text-4xl text-blue-500 text-center">{error}</p>}
    </div>
  );
}
