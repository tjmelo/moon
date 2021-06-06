"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avatar = void 0;
const avatar = () => {
    const numberRandom = Math.random();
    let processRandom = Math.floor(numberRandom * 10);
    return processRandom;
};
exports.avatar = avatar;
