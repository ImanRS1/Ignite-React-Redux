import { buildQueries } from "@testing-library/dom";
import { withTheme } from "styled-components";
import { gameScreenshotURL } from "./api";

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};

export const blinkingColor = {
  hidden: { opacity: 0, color: "#000" },
  show: {
    color: "#fff",
    opacity: 1,
    transition: {
      delay: 1,
      type: "spring",
      bounce: 0.5,
      duration: 0.1,
      repeat: 6,
      repeatType: "reverse",
    },
  },
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.75 },
  },
};
