import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

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
          <h5>POWERED BY RAWG.IO</h5>
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
  background-image: linear-gradient(rgba(224, 59, 59, 0.2), #333);
  background-color: rgba(224, 59, 59, 0.2);

  input {
    width: 30rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.55rem 2rem;
    cursor: pointer;
    background: #c41c16;
    color: white;
    &:hover {
      background-color: #d83232;
      color: white;
    }
    &:focus {
      outline: none;
    }
  }

  .search-container {
    padding-top: 1.1rem;
    h5 {
      font-size: 1.5rem;
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
`;

export default Nav;
