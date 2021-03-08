import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {smallImage} from "../util";
import {popUp} from "../animations";

const Game = ({ name, released, image, id, metacriticScore }) => {
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

  const checkMetaScore = (mScore) =>{
    console.log(typeof(mScore));
    if(typeof(mScore) != "number"){
      return "N/A";
    }else{
      return mScore;
    }
  }

  return (
    <StyledGame variants={popUp} initial="hidden" animate="show" LayoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3>{name}</motion.h3 >
        <p>{released}</p>
        <p>{checkMetaScore(metacriticScore)}</p>

        <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
