import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn, blinkingColor } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearSearched}>
        <div className="image-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="backImage-container">
          <img src={logo} alt="logo" />
        </div>
        <h2>Ignite</h2>
        <h1>GAMERS SEARCH ENGINE</h1>
      </Logo>
      <div className="search-container">
        <form className="search">
          <input
            value={textInput}
            onChange={inputHandler}
            type="text"
            placeholder="Type a game title..."
          />
          <button onClick={submitSearch} type="submit">
            Search
          </button>
          <motion.h5 variants={blinkingColor} initial="hidden" animate="show">
            POWERED BY RAWG.IO
          </motion.h5>
        </form>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem 5rem 5rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(rgba(224, 59, 59, 0.2), #333);

  input {
    width: 30rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;

    &::placeholder {
      font-weight: lighter;
      font-size: 1.2rem;
    }

    @media screen and (max-width: 1350px) {
      width: 20rem;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.59rem 2rem;
    cursor: pointer;
    /* background: #c41c16; */
    background-color: rgba(196, 28, 22, 0.6);
    color: white;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    &:hover {
      background-color: #d83232;
      color: white;
    }
    &:focus {
      outline: none;
    }
  }

  .search-container {
    padding-top: 2.5rem;
    h5 {
      font-size: 1rem;
      padding: 1rem 0rem;
      color: white;
      text-shadow: 0.1vw 0vw 0.25vw #ffd8d8, 0.2vw 0vw 0.25vw #ffd8d8,
        0.4vw 0vw 0.25vw #ffd8d8, 0.1vw 0vw 0vw #f25757, 0.2vw 0vw 0vw #f25757,
        0.4vw 0vw 0vw #f25757, 0.1vw 0vw 0.1vw #f25757, 0.2vw 0vw 0.1vw #f25757,
        0.4vw 0vw 0.1vw #f25757, 0.1vw 0vw 2vw #f25757, 0.2vw 0vw 2vw #f25757,
        0.4vw 0vw 2vw #f25757, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,
        0.4vw 0vw 1vw #e50b0b, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 1vw #e50b0b,
        0.4vw 0vw 5vw #e50b0b, 0.1vw 0vw 1vw #e50b0b, 0.2vw 0vw 10vw #e50b0b,
        0.4vw 0vw 5vw #e50b0b;

      @media screen and (max-width: 1240px) {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 1240px) {
    flex-direction: column;
    padding: 2rem 5rem;
  }

  @media screen and (max-width: 628px) {
    .search {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      button {
        margin-top: 1rem;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
      }

      input {
        width: 130%;
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;
      }
    }
  }

  @media screen and (max-width: 525px) {
    padding: 2rem 1rem;

    .search {
      input {
        width: 100%;
      }
      h5 {
        font-size: 0.7rem;
      }

      button {
    font-size: 1rem;
    border: none;
    padding: 0.59rem 2rem;
    }
  }

  @media screen and (max-width: 378px) {
    padding: 2rem 0rem;
    .search-container {
      padding-top: 1rem;
    }
    .search {
      input {
        font-size: 0.9rem;
        width: 135%;
        font-weight: normal;

        &::placeholder {
          font-weight: lighter;
          font-size: 0.7rem;
        }
      }
    }
  }

  @media screen and (max-width: 325px) {
    .search {
      input {
        font-size: 0.9rem;
        width: 100%;
        font-weight: normal;
      }
    }
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: #c41c16;
  cursor: pointer;
  position: relative;
  img {
    height: 2rem;
    width: 2rem;
    background-color: #c41c16;
    border-radius: 1rem;
  }
  h2 {
    font-size: 10rem;
  }
  h1 {
    color: #b6504d;
  }
  .image-container {
    position: absolute;
    left: 16.5rem;
    top: 4.2rem;
  }

  .backImage-container {
    position: absolute;
    z-index: -1;
    left: 5rem;
    top: 0;
    img {
      height: 20rem;
      width: 20rem;
      background-color: transparent;
    }
  }

  @media screen and (max-width: 1240px) {
    align-items: center;

    .backImage-container {
      top: -25px;
    }
  }

  @media screen and (max-width: 525px) {
    h2 {
      font-size: 7rem;
    }
    h1 {
      font-size: 1rem;
    }

    .backImage-container {
      left: 16%;
      img {
        height: 15rem;
        width: 15rem;
      }
    }

    .image-container {
      position: absolute;
      left: 11.7rem;
      top: 2.7rem;
    }
  }

  @media screen and (max-width: 378px) {
    h2 {
      font-size: 4rem;
    }
    h1 {
      font-size: 0.8rem;
    }
    .backImage-container {
      top: -9%;
      left: 12%;
      img {
        height: 10rem;
        width: 10rem;
      }
    }

    .image-container {
      position: absolute;
      left: 6.8rem;
      top: 1.6rem;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`;

export default Nav;
