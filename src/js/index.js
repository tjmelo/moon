"use strict";
var api = require('./api');
var inputName = document.querySelector('.inputName');
var buttonResearch = document.querySelector('.inputResearch');
var resultResearch = document.querySelectorAll('.result');
var requestName;
buttonResearch.addEventListener('click', function (e) {
    e.preventDefault();
    requestName = api.api.get("?name=" + inputName.value)
        .then(function (e) { return e.data; });
    requestName
        .then(function (a) {
        var arr = [
            a.name,
            a.gender,
            a.probability,
            a.count
        ];
        console.log(arr);
        resultResearch.forEach(function (el, idx) {
            el.textContent = arr[idx];
        });
    });
});
