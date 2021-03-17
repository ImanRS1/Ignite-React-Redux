import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      history.push("/Ignite-React-Redux/");
    }
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  const checkMetaScore = (mScore) => {
    if (typeof mScore != "number") {
      return "N/A";
    } else {
      return mScore;
    }
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox Series S/X":
        return xbox;
      case "Xbox S":
        return xbox;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail LayoutId={pathId}>
            <div className="top-container">
              <Stats>
                <div className="rating">
                  <motion.h3>{game.name}</motion.h3>
                  {game.publishers.map((publisher) => (
                    <p className="publisher">{publisher.name}</p>
                  ))}
                  <p className="rating-container">
                    {" "}
                    {getStars()}
                    <div className="rating-separate">{game.rating}/ 5.00</div>
                  </p>
                  <div className="genres-container">
                    {game.genres.map((genre) => (
                      <p className="genres">{genre.name}</p>
                    ))}
                  </div>
                  <div className="info-url">
                    <a href={game.metacritic_url} target="_blank">
                      <p>{game.metacritic_url}</p>
                    </a>
                    <a href={game.website} target="_blank">
                      <p>{game.website}</p>
                    </a>
                  </div>
                </div>
                <Info>
                  <h3>Platforms:</h3>
                  <Platforms>
                    {game.platforms.map((data) => (
                      <img
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        alt={data.platform.name}
                        title={data.platform.name}
                      ></img>
                    ))}
                  </Platforms>
                  <h3 className="meta-header">Metacritic Score:</h3>
                  <StyledScore>{checkMetaScore(game.metacritic)}</StyledScore>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  layoutId={`image ${pathId}`}
                  src={smallImage(game.background_image, 1280)}
                  alt={game.background_image}
                />
              </Media>
            </div>

            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  margin-top: 1rem;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  color: black;
  position: absolute;
  left: 10%;
  overflow: hidden;

  img {
    width: 100%;
  }

  .top-container {
    height: 70vh;
    overflow: hidden;
    width: 80vw;
    margin: -2rem -5rem;
    position: relative;
  }

  @media screen and (max-width: 1100px) {
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 524px) {
    width: 90%;
    left: 5%;
  }
`;

const Stats = styled(motion.div)`
  width: 80vw;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 0.5rem 2rem;
  position: absolute;
  z-index: 1;
  h3 {
    padding: 0.2rem 0;
  }
  h3,
  p {
    color: white;
  }
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  .publisher {
    font-size: 1rem;
  }

  .genres-container {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
  }
  .genres {
    font-size: 1rem;
    font-weight: lighter;
    border: 1px solid white;
    padding: 0 0.5rem;
    margin-right: 0.2rem;
  }

  .info-url {
    margin-top: 0.2rem;
    p {
      font-size: 1rem;
    }
  }

  .rating-container {
    display: flex;

    .rating-separate {
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const Info = styled(motion.div)`
  text-align: end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 40%;

  .meta-header {
    margin-top: 1rem;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    align-items: flex-start;
    h3 {
      padding-bottom: 0;
    }
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  img {
    margin: 0.5rem;
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.2rem;
  }

  @media screen and (max-width: 647px) {
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media screen and (max-width: 400px) {
    justify-content: flex-start;
  }
`;

const StyledScore = styled(motion.div)`
  border: 3px solid gold;
  font-size: 2rem;
  border-radius: 1rem;
  width: 5rem;
  height: 4rem;
  color: white;
  background-color: #333;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 524px) {
    width: 5rem;
    height: 4rem;
    font-size: 1.5rem;
  }
`;

const Media = styled(motion.div)`
  position: absolute;
  top: 0;
  z-index: 0;
  img {
    width: 80vw;
    height: 100vh;
    object-fit: cover;
  }

  @media screen and (max-width: 1050px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 650px) {
    margin-top: 1rem;
    img {
      height: 40vh;
    }
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;

  @media screen and (max-width: 650px) {
    margin: 2rem 0rem;
  }
`;

export default GameDetail;
