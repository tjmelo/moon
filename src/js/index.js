"use strict";
var api = require('./api');
var _a = require('./utils'), inputName = _a.inputName, buttonResearch = _a.buttonResearch, resultResearch = _a.resultResearch;
var requestName;
buttonResearch.addEventListener('click', function (e) {
    e.preventDefault();
    for (var _i = 0, resultResearch_1 = resultResearch; _i < resultResearch_1.length; _i++) {
        var item = resultResearch_1[_i];
        item.textContent = '';
    }
    resultResearch[0].textContent = "Waiting research...";
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
        setTimeout(function () {
            resultResearch.forEach(function (el, idx) {
                return el.textContent = arr[idx];
            });
        }, 1000);
    });
});
