import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      console.log(response);
      const json = await response.json();
      console.log(json);

      const filterData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);

      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie video:", error);
    }
  };

  useEffect(() => {
    getMovieVideo();
  }, [movieId]);
};

export default useMovieTrailer