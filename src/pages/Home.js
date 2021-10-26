import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";

import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

import Game from "../components/Game";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                  metacriticScore={game.metacritic}
                  video={game.clip}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Top Rated Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              metacriticScore={game.metacritic}
              video={game.clip}
            />
          ))}
        </Games>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              metacriticScore={game.metacritic}
              video={game.clip}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              metacriticScore={game.metacritic}
              video={game.clip}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const Games = styled(motion.div)`
  min-height: 80vh;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media screen and (max-width: 441px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-row-gap: 2rem;
    min-height: 100vh;
  }
`;

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 2rem 0rem 1.5rem 0rem;
    text-align: center;
    color: white;
    text-shadow: 0.1vw 0vw 0.25vw #a00909, 0.2vw 0vw 0.25vw #ffd8d8;
  }

  @media screen and (max-width: 628px) {
    h2 {
      padding: 2rem 0rem;
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 580px) {
    padding: 0rem 1rem;
  }

  @media screen and (max-width: 330px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export default Home;
