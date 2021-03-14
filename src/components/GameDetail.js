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
      history.push("/Ignite-React-Redux");
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
            <Stats>
              <div className="rating">
                <motion.h3>{game.name}</motion.h3>
                <p>Rating: {game.rating} / 5.00</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
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
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
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
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  color: black;
  position: absolute;
  left: 10%;

  img {
    width: 100%;
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
  display: flex;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const Info = styled(motion.div)`
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;

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

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
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
