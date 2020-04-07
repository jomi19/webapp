/* global menu */
"use strict";

var md = window.markdownit();

var report = (function () {
    var showReport = function () {
        window.mainContainer.innerHTML = "";

        fetch("kmom/01.md")
            .then(function(response) {
                return response.text();
            })
            .then(function(result) {
                window.mainContainer.innerHTML = md.render(result);
            });

        menu.showMenu("Redovisning");
    };

    return {
        showReport: showReport
    };
})(report);
