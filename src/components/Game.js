import React, { useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animations";

const Game = ({ name, released, image, id, metacriticScore, video }) => {
  const stringPathId = id.toString();
  const history = useHistory();
  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  const checkMetaScore = (mScore) => {
    if (typeof mScore != "number") {
      return "N/A";
    } else {
      return mScore;
    }
  };

  const [runVideo, setRunVideo] = useState(false);

  /*  const runVideo = (video) => {
    console.log(video.clip);

    return (
      <div className="video-container">
        <video controls autoPlay loop>
          <source src={video.clip} />
        </video>
      </div>
    );
    {game.clip && (
      <video controls autoPlay loop>
        <source src={game.clip.clips.full} />
      </video>
    )}
  }; */

  return (
    <StyledGame
      variants={popUp}
      initial="hidden"
      animate="show"
      LayoutId={stringPathId}
      onClick={loadDetailHandler}
      /* onHoverStart={() => runVideo(video)} */
      onMouseEnter={() => setRunVideo(true)}
      onMouseLeave={() => setRunVideo(false)}
    >
      <Link to={`/game/${id}`}>
        <StyledGameInfo>
          <h3>{name}</h3>
          <p>{released}</p>
        </StyledGameInfo>
        <StyledScore>{checkMetaScore(metacriticScore)}</StyledScore>

        {runVideo && (
          <div className="video-container">
            <video controls muted autoPlay loop>
              <source src={video.clip} />
            </video>
          </div>
        )}

        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  height: 40vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  color: #fefefe;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-container {
    z-index: 999;
    width: 100%;
    height: 100%;
  }
`;

const StyledGameInfo = styled(motion.div)`
  position: absolute;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  h3 {
    padding: 0;
    color: #fefefe;
  }
  p {
    color: #fefefe;
  }
`;

const StyledScore = styled(motion.div)`
  border: 5px solid gold;
  font-size: 2.5rem;
  border-bottom-left-radius: 1rem;
  width: 6rem;
  height: 5rem;
  color: white;
  background-color: #333;
  position: absolute;
  font-weight: bold;
  right: -5px;
  top: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Game;
