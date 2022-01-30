import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

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

  const { screen, game, movie, isLoading } = useSelector(
    (state) => state.detail
  );
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
                    <div className="rating-separate">{game.rating}/ 5</div>
                  </p>
                  <div className="genres-container">
                    {game.genres.map((genre) => (
                      <p className="genres">{genre.name}</p>
                    ))}
                  </div>
                  <div className="info-url">
                    <a href={game.metacritic_url} target="_blank">
                      <p>
                        {game.metacritic_url.replace(/^(http|https):\/\//g, "")}
                      </p>
                    </a>
                    <a href={game.website} target="_blank">
                      <p>{game.website.replace(/^(http|https):\/\//g, "")}</p>
                    </a>
                  </div>
                </div>
                <Info>
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
                  <div className="meta-container">
                    <h3 className="meta-header">Metacritic:</h3>
                    <StyledScore>{checkMetaScore(game.metacritic)}</StyledScore>
                  </div>
                </Info>
              </Stats>
              <Media>
                <motion.img
                  layoutId={`image ${pathId}`}
                  src={smallImage(game.background_image, 1280)}
                  alt={game.background_image}
                />

                {movie.data.count !== 0 && (
                  <GameClip variants={fadeIn} initial="hidden" animate="show">
                    <div className="clip">
                      <div className="video-container">
                        <video muted controls autoPlay loop>
                          <source src={movie.data.results[0].data.max} />
                        </video>
                      </div>
                    </div>
                  </GameClip>
                )}
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
  background: rgba(0, 0, 0, 0.8);
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
    width: 80vw;
    margin: -2rem -5rem;
    position: relative;

    @media screen and (max-width: 1100px) {
      margin: -2rem -1rem;
    }

    @media screen and (max-width: 650px) {
      margin: -2rem -1rem;
      width: 100%;
    }

    @media screen and (max-width: 524px) {
      margin: -2rem -1rem;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 2rem 1rem;
  }

  @media screen and (max-width: 900px) {
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
  padding: 1rem 2rem 0.5rem 2rem;
  position: absolute;
  z-index: 1;
  h3 {
    padding: 0.2rem 0;

    @media screen and (max-width: 650px) {
      width: 80%;
    }

    @media screen and (max-width: 400px) {
      width: 70%;
    }
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
    font-size: 0.8rem;
    font-weight: lighter;
    text-transform: uppercase;
    letter-spacing: 0.25rem;

    @media screen and (max-width: 950px) {
      font-size: 0.5rem;
      margin-right: 4rem;
    }
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
    color: white;

    @media screen and (max-width: 650px) {
      font-size: 0.7rem;
      padding: 0 0.2rem;
    }
  }

  .info-url {
    margin-top: 0.2rem;
    p {
      font-size: 0.9rem;
    }

    @media screen and (max-width: 950px) {
      p {
        font-size: 0.7rem;
      }
    }
  }

  .rating-container {
    display: flex;

    .rating-separate {
      margin-left: 0.5rem;

      @media screen and (max-width: 650px) {
        font-size: 0.8rem;
      }
    }
  }

  @media screen and (max-width: 880px) {
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }

  @media screen and (max-width: 524px) {
    width: 90vw;
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
  width: 50%;

  .meta-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .meta-header {
      margin-top: 1rem;
      @media screen and (max-width: 1100px) {
        font-size: 1rem;
      }

      @media screen and (max-width: 1100px) {
        display: none;
      }
    }
  }

  h3 {
    font-weight: lighter;
  }

  @media screen and (max-width: 650px) {
    width: auto;
    h3 {
      padding-bottom: 0;
    }
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

  @media screen and (max-width: 1100px) {
    img {
      width: 2rem;
      height: 2rem;
    }
  }

  @media screen and (max-width: 850px) {
  }

  @media screen and (max-width: 650px) {
    display: none;
    /* img {
      width: 1.5rem;
      height: 1.5rem;
    } */
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

  @media screen and (max-width: 1100px) {
    font-size: 1.5rem;
    width: 4rem;
    height: 3rem;
    border: 2px solid gold;
  }

  @media screen and (max-width: 650px) {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    border: 2px solid gold;
    border-radius: 1rem;
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }

  @media screen and (max-width: 524px) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

const Media = styled(motion.div)`
  position: absolute;
  top: 0;
  z-index: 0;
  img {
    width: 80vw;
    overflow: hidden;
    height: 70vh;
  }

  @media screen and (max-width: 880px) {
    img {
      height: 70vh;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 524px) {
    img {
      width: 90vw;
    }
  }
`;

const GameClip = styled(motion.div)`
  width: 100%;
  left: 0;
  position: absolute;
  top: 50%;
  z-index: 99;
  display: flex;
  justify-content: center;

  .clip {
    height: 42vh;
    width: 50%;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.6);

    .video-container {
      z-index: 999;
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      height: 100%;
      width: 100%;
    }

    @media screen and (max-width: 1100px) {
      width: 70%;
      height: 37vh;
    }

    @media screen and (max-width: 724px) {
      width: 90%;
      height: 37vh;
    }

    @media screen and (max-width: 440px) {
      width: 90%;
      height: 27vh;
    }
  }

  @media screen and (max-width: 724px) {
    width: 96%;
  }

  @media screen and (max-width: 440px) {
    top: 65%;
  }
`;

const Description = styled(motion.div)`
  margin: 7rem 0rem 5rem 0rem;

  @media screen and (max-width: 1100px) {
    margin-top: 4rem;
  }

  @media screen and (max-width: 650px) {
    margin: 4rem 1rem;
  }
`;

export default GameDetail;
