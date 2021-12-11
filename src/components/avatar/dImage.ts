export const dImage = (image: number, gender: string): string => {
  let res;
  switch (image) {
    case 0:
      gender !== "female"
        ? (res = require("../../avatar/m0.png"))
        : (res = require("../../avatar/w0.png"));
      break;
    case 1:
      gender !== "female"
        ? (res = require("../../avatar/m1.png"))
        : (res = require("../../avatar/w1.png"));
      break;
    case 2:
      gender !== "female"
        ? (res = require("../../avatar/m2.png"))
        : (res = require("../../avatar/w2.png"));
      break;
    case 3:
      gender !== "female"
        ? (res = require("../../avatar/m3.png"))
        : (res = require("../../avatar/w3.png"));
      break;
    case 4:
      gender !== "female"
        ? (res = require("../../avatar/m4.png"))
        : (res = require("../../avatar/w4.png"));
      break;
    case 5:
      gender !== "female"
        ? (res = require("../../avatar/m5.png"))
        : (res = require("../../avatar/w5.png"));
      break;
    case 6:
      gender !== "female"
        ? (res = require("../../avatar/m6.png"))
        : (res = require("../../avatar/w6.png"));
      break;
    case 7:
      gender !== "female"
        ? (res = require("../../avatar/m7.png"))
        : (res = require("../../avatar/w7.png"));
      break;
    case 8:
      gender !== "female"
        ? (res = require("../../avatar/m8.png"))
        : (res = require("../../avatar/w8.png"));
      break;
    case 9:
      gender !== "female"
        ? (res = require("../../avatar/m9.png"))
        : (res = require("../../avatar/w9.png"));
      break;
  }
  return res.default;
};
