"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api = require('./api');
const avatar = require('./avatar');
const { inputName, buttonResearch, resultResearch, resultAvatar } = require('./utils');
let requestName;
buttonResearch.addEventListener('click', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    for (let item of resultResearch)
        item.textContent = '';
    resultAvatar.removeAttribute('src');
    resultResearch[0].textContent = `Waiting research...`;
    requestName = yield api.api.get(`?name=${inputName.value}`);
    let result = yield requestName.data;
    let arr = [
        result.name,
        result.gender,
        `${(result.probability * 100).toFixed(1)}%`,
        result.count,
    ];
    let image = (result.gender === 'female')
        ? `w${avatar.avatar()}`
        : `m${avatar.avatar()}`;
    setTimeout(() => {
        resultResearch.forEach((el, idx) => el.textContent = arr[idx]);
        resultAvatar.setAttribute('src', `../public/avatar/${image}.png`);
    }, 1000);
}));
