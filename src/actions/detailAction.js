import axios from "axios";
import { gameDetailsURL, gameScreenshotURL, gameMovieURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const movieData = await axios.get(gameMovieURL(id));
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
      movie: movieData,
    },
  });
};
